"use client";
import React from "react";
import "./globals.css";
import "./font.css";
import SplitText from "./ReactBits/SplitText/SplitText";
import Silk from "./ReactBits/Silk/Silk";
import TiltedCard from "./ReactBits/TiltedCard/TiltedCard";

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
          text="Who is Misc?"
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
      </div>
    </div>
  );
}
