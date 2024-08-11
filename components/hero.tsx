"use client";
import React from "react";
import { GridBackground } from "./ui/grid-background";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/moving-border";
import { IoPaperPlane } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="pt-32 pb-20">
      <Spotlight fill="white" className="-top-28 -left-20 md:-top-20 md:-left-32 h-screen" />
      <Spotlight fill="purple" className="top-0 left-[90vw] h-[80vh] w-[50vw]" />
      <Spotlight fill="blue" className="top-28 left-80 h-[80vh] w-[50vw]" />
      
      <GridBackground />
      
      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-200 max-w-80">
            Dynamic Web Magic with Next
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Aryesh, a Next.js Developer based in Kolkata.
          </p>
          <Button className="capitalize bg-transparent text-lg gap-2" containerClassName="w-52 my-20" borderRadius="12px">
            my work <IoPaperPlane />
          </Button>
        </div>
      </div>
    </div>
  );
}
