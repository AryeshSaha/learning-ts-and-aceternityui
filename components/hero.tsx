"use client";
import React from "react";
import { GridBackground } from "./ui/grid-background";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/moving-border";
import { IoPaperPlane } from "react-icons/io5";
import Image from "next/image";
const CVCard = "/images/3d-fluency-resume.png";

export default function Hero() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <Spotlight
        fill="white"
        className="-top-28 -left-20 md:-top-20 md:-left-32 h-screen"
      />
      <Spotlight
        fill="purple"
        className="top-0 left-[90vw] h-[80vh] w-[50vw]"
      />
      <Spotlight fill="blue" className="top-28 left-80 h-[80vh] w-[50vw]" />

      <GridBackground />

      {/* Content */}
      <div className="flex justify-between relative mt-32 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center md:items-start justify-center">
          <p className="uppercase tracking-widest text-xs text-center md:text-start text-blue-200 w-full">
            Dynamic Pdf Generation for building resume
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless Resume Generation with AI"
            className="text-center md:text-start text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:text-start md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! Welcome to CVWizard, a cv maker for everyone.
          </p>
          <Button
            className="capitalize bg-transparent text-lg gap-2"
            containerClassName="w-52 my-10"
            borderRadius="12px"
          >
            get started <IoPaperPlane />
          </Button>
        </div>
        <div className="relative w-full hidden md:block">
          <Image
            src={CVCard}
            alt="3d-cv-card"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="rounded pb-16 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
