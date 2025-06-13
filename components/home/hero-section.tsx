import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import { containerVariants, itemVariants } from "@/utils/constraints";
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionSection,
  MotionSpan,
} from "../common/motion-wrapper";

const buttonVariants = {
  scale: 1.08,
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 200,
  },
};

export default function Hebluection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto flex flex-col items-center justify-center px-6 sm:px-8 py-24 lg:py-36 max-w-7xl text-center"
    >
      {/* Background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-purple-400 opacity-20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[100px] rounded-full -z-10 animate-pulse" />

      {/* Badge */}
      <MotionDiv
        variants={itemVariants}
        className="group mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full p-[1.5px] shadow-md hover:shadow-lg transition-shadow"
      >
        <Badge
          variant="secondary"
          className="flex items-center gap-2 bg-white text-blue-700 px-6 py-2 rounded-full font-medium text-sm sm:text-base group-hover:bg-gray-50 transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 animate-ping text-blue-600" />
          <span className="tracking-wide">AI-Powered Intelligence</span>
        </Badge>
      </MotionDiv>

      {/* Title */}
      <MotionH1
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-5xl"
      >
        Transform{" "}
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          documents
        </span>{" "}
        into <br />
        beautiful summaries <span className="inline-block animate-wiggle">⚡</span>
      </MotionH1>

      {/* Description */}
      <MotionH2
        variants={itemVariants}
        className="mt-6 text-gray-600 max-w-2xl text-lg sm:text-xl lg:text-2xl font-light"
      >
        Upload your PDF and get a perfectly structured summary — in seconds, not hours.
      </MotionH2>

      {/* CTA Button */}
      <MotionDiv variants={itemVariants} whileHover={buttonVariants}>
        <Button
          variant={"link"}
          className="text-white font-bold bg-gradient-to-r from-blue-500 to-purple-500 mt-6 text-base sm:text-lg lg:text-xl rounded-lg px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 hover:to-slate-900 hover:no-underline shadow-lg transition-all duration-300"
        >
          <Link href={"/#pricing"} className="flex gap-2 items-center">
            <MotionSpan>Get Started</MotionSpan>
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </Link>
        </Button>
      </MotionDiv>
    </MotionSection>
  );
}
