import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { GradientButton } from "./ui/gradientbutton";
// import { TextHoverEffect } from "./ui/text-hover-effect";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { AnimatedTooltip } from "./ui/animated-tooltip";


export default function Hero() {
  const words = [
    {
      text: "I",
    },
    {
      text: "design,",
    },
    {
      text: "build,",
    },
    {
      text: "and",
    },
    {
      text: "solve",
    },
    {
      text: "problems",
    },
    {
      text: "-",
    },
    {
      text: "simply",
    },
    {
      text: "and",
    },
    {
      text: "smartly",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
      <div className="h-screen relative flex flex-col items-center justify-center bg-dark-blue">
        <BackgroundBeams className="background-beams" />
        <div className="z-10 max-w-5xl w-full text-center">
          <div
            className=""
          >
            <div className={'flex justify-center items-center'}>
              <AnimatedTooltip items={[{id: 1, name: "Hariharan", designation: "Web developer and designer", image: "/image.jpg"}]}/>
            </div>
            {/* <TextGenerateEffect
              className="text-sm font-medium text-center text-blue-100 uppercase font-pilcrow-medium tracking-wider mb-4"
              duration={1.5}
              words={"Web Developer & Designer"}
            /> */}
            <TextGenerateEffect
              className={`lg:text-7xl md:text-7xl sm:text-4xl text-3xl font-bold text-center mt-4 tracking-wide text-slate-100 font-chillax-semibold uppercase`}
              duration={2}
              words={"I'm Hariharan"}
            />
            <TypewriterEffect
              words={words}
              className="mt-3 text-slate-300 text-lg max-w-xl mx-auto leading-relaxed opacity-80 font-pilcrow-medium"
              startDelay={2}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <GradientButton text="View work" />
          </div>
        </div>
        {/* <div className="absolute z-11 bottom-0">
          <TextHoverEffect duration={0.2} text={"VIBE"} classes={`text-9xl`} />
        </div> */}
      </div>
    </>
  );
}
