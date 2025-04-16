'use client';

import React, { useState } from 'react';
import FileUpload from '../../components/ui/file-upload';
import csvDownload from 'json-to-csv-export';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function JsonConverterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [csv, setCsv] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (f: File) => {
    setError(null);
    setCsv(null);
    setFile(f);
    try {
      const text = await f.text();
      const json = JSON.parse(text);
      const arr = Array.isArray(json) ? json : [json];
      // Only generate CSV, do not download
      const csvString = csvDownload({ data: arr, returnCsv: true });
      setCsv(csvString);
    } catch (e: any) {
      setError('Invalid JSON file.');
      setFile(null);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setCsv(null);
    setError(null);
  };

  const handleDownload = () => {
    if (!csv) return;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (file?.name || 'data').replace(/\.json$/i, '') + '.csv';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  };

  return (
    <div className="h-screen relative flex flex-col items-center justify-center bg-dark-blue">
        <BackgroundBeams />
      <h1 className="text-2xl font-bold mb-6  text-white">JSON to CSV Converter</h1>
      <FileUpload
        value={file}
        onChange={handleFileChange}
        onRemove={handleRemove}
        accept=".json,application/json"
        labelText="Upload your JSON file"
        buttonText="Select JSON File"
      />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <div className="mt-6 flex flex-col items-center gap-2 w-full">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
          onClick={handleDownload}
          disabled={!csv}
        >
          Download CSV
        </button>
        {csv && (
          <pre className="mt-2 p-2 bg-gray-900 text-white text-xs rounded overflow-x-auto max-h-64 w-full">{csv}</pre>
        )}
      </div>
    </div>
  );
}