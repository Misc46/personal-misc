"use client";
import React from "react";
import { animate } from "animejs";
import "./globals.css";
import "./font.css";
import SplitText from "./ReactBits/SplitText/SplitText";
import Silk from "./ReactBits/Silk/Silk";
import GradientText from "./ReactBits/GradientText/GradientText";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Silk as background */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Silk
          speed={5}
          scale={1}
          color="#40000"
          noiseIntensity={2}
          rotation={0}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center mt-16">
        <SplitText
          text={`"Who is Misc?"`}
          className="fugaz-one text-center italic text-4xl md:text-8xl md:mt-32 overflow-visible"
          delay={50}
          duration={0.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="mt-8 text-lg md:text-2xl montserrat-500">
          <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={2}
        showBorder={false}
        className=""
          >
        Striving For Life In All Aspects Of My Work <br/>
        Interacting With The World Around Me
          </GradientText>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <a
            href="/thoughts"
            className="cursor-pointer px-6 py-4 bg-white/10 rounded-lg shadow-lg hover:bg-white/20 transition text-xl font-semibold montserrat-500"
          >
            Read my thoughts
          </a>
          <a
            href="/projects"
            className="cursor-pointer px-6 py-4 bg-white/10 rounded-lg shadow-lg hover:bg-white/20 transition text-xl font-semibold montserrat-500"
          >
            See what I do
          </a>
          <a
            href="/contact"
            className="cursor-pointer px-6 py-4 bg-white/10 rounded-lg shadow-lg hover:bg-white/20 transition text-xl font-semibold montserrat-500"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}
