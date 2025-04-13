import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { GradientButton } from "./ui/gradientbutton";
import Link from "next/link";
import { TextHoverEffect } from "./ui/text-hover-effect";

export default function Hero() {
  return (
    <>
      <div className="h-screen relative flex flex-col items-center justify-center">
        <BackgroundBeams className="background-beams" />
        <div className="z-10 max-w-5xl w-full text-center px-5">
          <div className="mb-8">
            <TextGenerateEffect
              className="text-sm font-medium text-center text-blue-400 uppercase"
              duration={1.5}
              words={"Welcome to my website!"} 
            />
            <TextGenerateEffect
              className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-center mt-4 tracking-wide"
              duration={2}
              words={"I'm Hariharan"} 
            />
            <p className="mt-6 text-slate-300 text-lg max-w-xl mx-auto leading-relaxed opacity-80">
              Developer and designer passionate about creating beautiful digital experiences that solve real problems.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <GradientButton text="Know more"/>
          </div>
        </div>
        <div className="absolute z-11 bottom-0">
              <TextHoverEffect duration={0.2} text={"VIBE"} classes={`text-9xl`} />
          </div>
      </div>
    </>
  );
}