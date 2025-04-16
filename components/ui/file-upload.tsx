"use client";

import React, { useRef, useState, useEffect } from "react";

// If the cn utility doesn't exist, define it inline
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(" ");
};

interface FileUploadProps {
  value: File | null;
  onChange: (file: File) => void;
  onRemove: () => void;
  accept?: string;
  maxSize?: number;
  disabled?: boolean;
  className?: string;
  showPreview?: boolean;
  labelText?: string;
  buttonText?: string;
}

// Export as default (not named export)
const FileUpload = ({
  value,
  onChange,
  onRemove,
  accept = "*",
  maxSize = 10 * 1024 * 1024, // 10MB default
  disabled = false,
  className = "",
  showPreview = true,
  labelText = "Upload a file",
  buttonText = "Select File",
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset the file input when the value changes to null
  useEffect(() => {
    if (value === null && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [value]);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragging(true);
  };

  const validateFile = (file: File): boolean => {
    // Check file size
    if (file.size > maxSize) {
      setError(`File size exceeds ${(maxSize / (1024 * 1024)).toFixed(2)}MB limit.`);
      return false;
    }

    // Check file type if accept is specified
    if (accept !== "*") {
      const acceptedTypes = accept.split(",").map(type => type.trim());
      const fileType = file.type;
      const fileExtension = `.${file.name.split(".").pop()}`;

      const isAccepted = acceptedTypes.some(type => {
        if (type.startsWith(".")) {
          // This is a file extension
          return fileExtension.toLowerCase() === type.toLowerCase();
        } else {
          // This is a mime type
          return fileType === type || type === "*" ||
            (type.endsWith("/*") && fileType.startsWith(type.replace("/*", "/")));
        }
      });

      if (!isAccepted) {
        setError(`File type not accepted. Please upload: ${accept}`);
        return false;
      }
    }

    setError(null);
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (disabled) return;
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onChange(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onChange(file);
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Reset the file input value
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    
    // Call the onRemove callback
    onRemove();
    setError(null);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className={cn("w-lg", className)}>
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        accept={accept}
        className="hidden"
        disabled={disabled}
        key={value ? undefined : "fileInput"} // Force re-render when value is null
      />

      {!value ? (
        <div
          className={cn(
            "relative border-2 border-dashed rounded-xl p-6 transition-colors",
            isDragging ? "border-blue-500 bg-blue-500/10" : "border-gray-300/30",
            disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:border-gray-400/50",
            "flex flex-col items-center justify-center gap-2 text-center"
          )}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => handleButtonClick}
          style={{ minHeight: "150px" }}
        >
          <div className="flex flex-col items-center justify-center text-white py-4 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-lg font-medium">{labelText}</p>
            <p className="text-sm text-gray-400 mt-1">Drag and drop or click to browse</p>
          </div>
          <button 
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-2"
            onClick={handleButtonClick}
            disabled={disabled}
          >
            {buttonText}
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>
      ) : (
        <div className="border-2 border-gray-300/30 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500/20 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-white truncate" style={{ maxWidth: "200px" }}>{value.name}</p>
                <p className="text-xs text-gray-400">{formatFileSize(value.size)}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={e => { e.preventDefault(); e.stopPropagation(); onRemove(); setError(null); if (inputRef.current) inputRef.current.value = ""; }}
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove file"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Make sure to export the component as default
export default FileUpload;
