"use client";

import React, { useState } from "react";
import Dither from "../ReactBits/Dither/Dither";
import SplitText from "../ReactBits/SplitText/SplitText";
import projects from "../data/projects.json";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "web", "mobile", "ai", "design"];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const getProjectCardStyle = (index: number) => ({
    background: index % 2 === 0
      ? "linear-gradient(135deg, rgba(252, 163, 17, 0.15) 0%, rgba(20, 33, 61, 0.4) 100%)"
      : "linear-gradient(135deg, rgba(20, 33, 61, 0.4) 0%, rgba(252, 163, 17, 0.15) 100%)",
    border: hoveredProject === index
      ? "1px solid rgba(252, 163, 17, 0.6)"
      : "1px solid rgba(252, 163, 17, 0.3)",
    boxShadow: hoveredProject === index
      ? "0 25px 50px -12px rgba(252, 163, 17, 0.3)"
      : "0 25px 50px -12px rgba(10, 10, 10, 0.25)",
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dither as background */}
      <div className="fixed inset-0 -z-10 w-full h-full">
              <Dither
                waveColor={[0.32, 0.40, 0.60]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={7}
                waveAmplitude={0.1}
                waveFrequency={5}
                waveSpeed={0.02}
              />
            </div>

      {/* Foreground content */}
      <main className="min-h-screen px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" style={{
      color: "#fca311",
      textShadow: "0 2px 8px rgba(10,10,10,0.8), 0 0px 2px #0a0a0a"}}>
            <SplitText
              text="See What I Do"
              className="fugaz-one text-center text-4xl md:text-6xl mb-6 overflow-visible"
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="center"
            />
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A showcase of my technical journey, from architectural solutions to creative implementations. 
              Each project represents a unique challenge and the thoughtful approach I bring to problem-solving.
            </p>
          </div>

          {/* Featured Projects */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-orange-400">
              Featured Work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 group"
                  style={getProjectCardStyle(index)}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-6xl text-orange-400/30">
                      {project.category === 'web' ? '🌐' : project.category === 'ai' ? '🤖' : '📱'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-orange-400 group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-orange-400/20 text-orange-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Code</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-orange-400/90 text-slate-900 shadow-lg'
                      : 'bg-slate-800/60 text-gray-100 hover:bg-slate-700/70 border border-orange-400/30 hover:border-orange-400/60'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </section>

          {/* All Projects Grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-orange-400">
              All Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: "linear-gradient(135deg, rgba(252, 163, 17, 0.1) 0%, rgba(20, 33, 61, 0.3) 100%)",
                    border: "1px solid rgba(252, 163, 17, 0.2)",
                  }}
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-4xl text-orange-400/30">
                      {project.category === 'web' ? '🌐' : 
                       project.category === 'ai' ? '🤖' : 
                       project.category === 'mobile' ? '📱' : '🎨'}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 text-orange-400 group-hover:text-orange-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-orange-400/20 text-orange-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-full">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Demo</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Code</span>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <div className="backdrop-blur-sm rounded-2xl shadow-2xl p-8 mx-auto max-w-2xl"
                 style={{
                   background: "linear-gradient(135deg, rgba(252, 163, 17, 0.1) 0%, rgba(20, 33, 61, 0.3) 100%)",
                   border: "1px solid rgba(252, 163, 17, 0.3)",
                 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">
                Interested in Working Together?
              </h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                I'm always excited to discuss new projects and innovative solutions. 
                Let's create something amazing together.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-slate-800/60 hover:bg-slate-700/70 border border-orange-400/30 hover:border-orange-400/60 rounded-lg shadow-lg transition-all duration-300 text-xl font-semibold text-gray-100 hover:shadow-orange-400/20 hover:shadow-xl"
              >
                Get In Touch
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}