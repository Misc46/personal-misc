"use client";

import React, { useState } from "react";
import Dither from "../ReactBits/Dither/Dither";
import projects from "../Data/projects.json";

export default function Thoughts() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  const getCardStyle = (index: number) => ({
    background:
      index % 2 === 0
        ? "linear-gradient(135deg, rgba(252, 163, 17, 0.15) 0%, rgba(20, 33, 61, 0.4) 100%)"
        : "linear-gradient(135deg, rgba(20, 33, 61, 0.4) 0%, rgba(252, 163, 17, 0.15) 100%)",
    border:
      hoveredCard === index
        ? "1px solid rgba(252, 163, 17, 0.6)"
        : "1px solid rgba(252, 163, 17, 0.3)",
    boxShadow:
      hoveredCard === index
        ? "0 25px 50px -12px rgba(252, 163, 17, 0.3)"
        : "0 25px 50px -12px rgba(10, 10, 10, 0.25)",
  });

  // Filter for featured projects or get first 3
  const featuredProjects = projects.filter(project => project.featured) || projects.slice(0, 3);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dither as background */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Dither
          waveColor={[0.32, 0.40, 0.60]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={9}
          waveAmplitude={0.1}
          waveFrequency={5}
          waveSpeed={0.02}
        />
      </div>

      {/* Foreground content */}
      <main className="min-h-screen px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight text-orange-400"
            style={{
              textShadow: "0 2px 8px rgba(10,10,10,0.8), 0 0px 2px #0a0a0a",
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
                className="text-2xl font-bold mb-4 pb-2"
                style={{
                  color: "#fca311",
                  borderBottom: "1px solid rgba(252, 163, 17, 0.4)",
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
                className="text-2xl font-bold mb-4 pb-2"
                style={{
                  color: "#fca311",
                  borderBottom: "1px solid rgba(252, 163, 17, 0.4)",
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
                className="text-2xl font-bold mb-4 pb-2"
                style={{
                  color: "#fca311",
                  borderBottom: "1px solid rgba(252, 163, 17, 0.4)",
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

            {/* Projects Showcase Card */}
            <article
              className="backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 cursor-pointer group border-2 border-orange-400/50 hover:border-orange-400/80 hover:shadow-orange-400/20 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(252, 163, 17, 0.2) 0%, rgba(20, 33, 61, 0.6) 100%)",
              }}
            >
              <div className="p-8 relative">
                <div className="flex items-center justify-between">
                  <div className="flex-1" onClick={() => setProjectsExpanded(!projectsExpanded)}>
                    <h2
                      className="text-2xl font-bold mb-4 pb-2 group-hover:text-orange-300 transition-colors duration-300"
                      style={{
                        color: "#fca311",
                        borderBottom: "1px solid rgba(252, 163, 17, 0.4)",
                      }}
                    >
                      My Framework Applied
                    </h2>
                    <p className="text-gray-200 leading-relaxed text-lg group-hover:text-gray-100 transition-colors duration-300">
                      Here's how these principles translate into real projects and solutions.
                    </p>
                  </div>
                  
                  {/* Click indicator */}
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-orange-400/20 border border-orange-400/40 flex items-center justify-center group-hover:bg-orange-400/30 group-hover:border-orange-400/60 transition-all duration-300" onClick={() => setProjectsExpanded(!projectsExpanded)}>
                      <svg 
                        className={`w-4 h-4 text-orange-400 transition-transform duration-300 ${projectsExpanded ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Subtle pulse animation to indicate interactivity */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
              
              {/* Expandable Projects Grid */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  projectsExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 pt-4 border-t border-orange-400/30">
                  <div className="grid gap-4">
                    {featuredProjects.map((project, index) => (
                      <div key={project.id} className="bg-slate-950/40 rounded-lg p-4 border border-orange-400/20 hover:border-orange-400/40 transition-colors duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-orange-200">
                            {project.title}
                          </h4>
                          <div className="flex gap-2 ml-4">
                            {project.liveUrl && (
                              <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-orange-400 hover:text-orange-300 transition-colors"
                                title="View Live"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                            {project.githubUrl && (
                              <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-orange-400 hover:text-orange-300 transition-colors"
                                title="View Code"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-orange-400/20 text-orange-200 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Show total project count */}
                  <div className="mt-4 text-center">
                    <div className="inline-block bg-slate-950/40 rounded-lg p-4 border border-orange-400/20">
                      <p className="text-orange-300 text-sm">
                        Showing {featuredProjects.length} of {projects.length} total projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}