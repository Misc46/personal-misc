"use client";

import React, { useState } from "react";
import Dither from "../ReactBits/Dither/Dither";

export default function Thoughts() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardStyle = (index: number) => ({
    background:
      index % 2 === 0
        ? "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(55, 65, 81, 0.4) 100%)"
        : "linear-gradient(135deg, rgba(55, 65, 81, 0.4) 0%, rgba(251, 146, 60, 0.15) 100%)",
    border:
      hoveredCard === index
        ? "1px solid rgba(251, 146, 60, 0.6)"
        : "1px solid rgba(251, 146, 60, 0.3)",
    boxShadow:
      hoveredCard === index
        ? "0 25px 50px -12px rgba(251, 146, 60, 0.3)"
        : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dither as background */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Dither
          waveColor={[0.3, 0.2, 0.0]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={9}
          waveAmplitude={0.5}
          waveFrequency={2}
          waveSpeed={0.02}
        />
      </div>

      {/* Foreground content */}
      <main className="min-h-screen px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl fugaz-one mb-12 text-center leading-tight text-orange-400"
            style={{
              textShadow: "0 2px 8px rgba(30,30,30,0.8), 0 0px 2px #222",
            }}
          >
            How I Think: Blending Engineering with Art for Creative, Precise
            Solutions
          </h1>

          <section className="space-y-8">
            <article
              className="backdrop-blur-sm rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-105"
              style={getCardStyle(0)}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h2
                className="text-2xl fugaz-one mb-4 pb-2"
                style={{
                  color: "#fb923c",
                  borderBottom: "1px solid rgba(251, 146, 60, 0.4)",
                }}
              >
                Architecture First
              </h2>
              <p className="text-gray-200 leading-relaxed text-lg">
                Every idea begins with a strong foundation. I approach
                challenges by building clear frameworks that help bring
                structure and direction to creative thinking, turning complexity
                into clarity.
              </p>
            </article>

            <article
              className="backdrop-blur-sm rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-105"
              style={getCardStyle(1)}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h2
                className="text-2xl fugaz-one mb-4 pb-2"
                style={{
                  color: "#fb923c",
                  borderBottom: "1px solid rgba(251, 146, 60, 0.4)",
                }}
              >
                Seamless Synthesis
              </h2>
              <p className="text-gray-200 leading-relaxed text-lg">
                Ideas are most powerful when they connect. I enjoy finding links
                between different concepts, weaving them together to create
                solutions that are both creative and practical.
              </p>
            </article>

            <article
              className="backdrop-blur-sm rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-105"
              style={getCardStyle(2)}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h2
                className="text-2xl fugaz-one mb-4 pb-2"
                style={{
                  color: "#fb923c",
                  borderBottom: "1px solid rgba(251, 146, 60, 0.4)",
                }}
              >
                Thoughtful Refinement
              </h2>
              <p className="text-gray-200 leading-relaxed text-lg">
                I believe in the value of careful iteration. By paying attention
                to details and refining ideas over time, I aim to share work
                that is considered, polished, and meaningful.
              </p>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
