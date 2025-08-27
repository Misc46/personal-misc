"use client";
import React, { useState } from "react";
import { animate } from "animejs";
import "./globals.css";
import "./font.css";
import SplitText from "./ReactBits/SplitText/SplitText";
import Silk from "./ReactBits/Silk/Silk";
import GradientText from "./ReactBits/GradientText/GradientText";

export default function Home() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "Frontend Development", icon: "🎨", description: "React, Next.js, TypeScript" },
    { name: "Backend Systems", icon: "⚙️", description: "Node.js, MySQL, Database Design" },
    { name: "Creative Problem Solving", icon: "🧩", description: "Innovative Solutions & Architecture" },
    { name: "User Experience", icon: "✨", description: "Intuitive Design & Interaction" },
  ];

  const values = [
    {
      title: "Precision",
      description: "Every line of code, every design decision, crafted with careful attention to detail.",
      icon: "🎯"
    },
    {
      title: "Innovation",
      description: "Pushing boundaries and exploring new possibilities in technology and design.",
      icon: "🚀"
    },
    {
      title: "Authenticity",
      description: "Bringing genuine passion and personality to every project I work on.",
      icon: "💫"
    }
  ];

  const getSkillStyle = (skill: string) => ({
    background: hoveredSkill === skill
      ? "linear-gradient(135deg, rgba(252, 163, 17, 0.25) 0%, rgba(20, 33, 61, 0.6) 100%)"
      : "linear-gradient(135deg, rgba(252, 163, 17, 0.1) 0%, rgba(20, 33, 61, 0.4) 100%)",
    border: hoveredSkill === skill
      ? "1px solid rgba(252, 163, 17, 0.6)"
      : "1px solid rgba(252, 163, 17, 0.3)",
    boxShadow: hoveredSkill === skill
      ? "0 25px 50px -12px rgba(252, 163, 17, 0.3)"
      : "0 25px 50px -12px rgba(10, 10, 10, 0.25)",
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Silk as background */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Silk
          speed={5}
          scale={1}
          color="#14213d"
          noiseIntensity={2}
          rotation={0}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-center mt-16 px-4">
          <SplitText
            text={`"Who is Misc?"`}
            className="fugaz-one text-center italic text-4xl md:text-8xl md:mt-32 overflow-visible text-gray-100"
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
              colors={["#fca311", "#e5e5e5"]}
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
              className="cursor-pointer px-6 py-4 bg-slate-800/60 hover:bg-slate-700/70 border border-orange-400/30 hover:border-orange-400/60 rounded-lg shadow-lg transition-all duration-300 text-xl font-semibold montserrat-500 text-gray-100 hover:shadow-orange-400/20 hover:shadow-xl"
            >
              Read my thoughts
            </a>
            <a
              href="/projects"
              className="cursor-pointer px-6 py-4 bg-slate-800/60 hover:bg-slate-700/70 border border-orange-400/30 hover:border-orange-400/60 rounded-lg shadow-lg transition-all duration-300 text-xl font-semibold montserrat-500 text-gray-100 hover:shadow-orange-400/20 hover:shadow-xl"
            >
              See what I do
            </a>
            <a
              href="/contact"
              className="cursor-pointer px-6 py-4 bg-slate-800/60 hover:bg-slate-700/70 border border-orange-400/30 hover:border-orange-400/60 rounded-lg shadow-lg transition-all duration-300 text-xl font-semibold montserrat-500 text-gray-100 hover:shadow-orange-400/20 hover:shadow-xl"
            >
              Contact me
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mt-32 px-4 max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-bold text-center mb-16 fugaz-one"
            style={{
              color: "#fca311",
              textShadow: "0 2px 8px rgba(10,10,10,0.8), 0 0px 2px #0a0a0a",
            }}
          >
            The Story Behind The Code
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-200 text-lg leading-relaxed montserrat-500">
                I'm a developer who believes that technology should be as beautiful as it is functional. 
                Every project I work on, to me is an opportunity to focus on the creative aspect of software development,
                where I can blend my technical skills with my passion for design and user experience.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed montserrat-500">
                My approach is rooted in the understanding of both the technical and aesthetic aspects of software development.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed montserrat-500">
                Whether I'm building a complex web application or designing an intuitive interface, 
                I bring the same level of thoughtfulness and attention to detail to every aspect of the process.
              </p>
            </div>
            
            <div className="backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 shadow-2xl"
                 style={{
                   background: "linear-gradient(135deg, rgba(252, 163, 17, 0.1) 0%, rgba(20, 33, 61, 0.4) 100%)",
                 }}>
              <div className="text-center">
                <div className="text-6xl mb-4">👋</div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400 fugaz-one">
                  Nice to meet you!
                </h3>
                <p className="text-gray-200 leading-relaxed montserrat-500">
                  I'm passionate about creating digital experiences that make a difference. 
                  Let's build something amazing together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-32 px-4 max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-bold text-center mb-16 fugaz-one"
            style={{
              color: "#fca311",
              textShadow: "0 2px 8px rgba(10,10,10,0.8), 0 0px 2px #0a0a0a",
            }}
          >
            What I Bring To The Table
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={getSkillStyle(skill.name)}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-orange-400 fugaz-one">
                    {skill.name}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed montserrat-500">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-32 px-4 max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-5xl font-bold text-center mb-16 fugaz-one"
            style={{
              color: "#fca311",
              textShadow: "0 2px 8px rgba(10,10,10,0.8), 0 0px 2px #0a0a0a",
            }}
          >
            Core Values That Drive Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 shadow-2xl text-center group hover:scale-105 transition-all duration-300"
                style={{
                  background: index % 2 === 0
                    ? "linear-gradient(135deg, rgba(252, 163, 17, 0.15) 0%, rgba(20, 33, 61, 0.4) 100%)"
                    : "linear-gradient(135deg, rgba(20, 33, 61, 0.4) 0%, rgba(252, 163, 17, 0.15) 100%)",
                }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400 fugaz-one">
                  {value.title}
                </h3>
                <p className="text-gray-200 leading-relaxed montserrat-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-32 px-4 max-w-4xl mx-auto mb-16">
          <div className="backdrop-blur-sm rounded-2xl p-12 border border-orange-400/30 shadow-2xl text-center"
               style={{
                 background: "linear-gradient(135deg, rgba(252, 163, 17, 0.2) 0%, rgba(20, 33, 61, 0.6) 100%)",
               }}>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 fugaz-one"
              style={{
                color: "#fca311",
                textShadow: "0 2px 8px rgba(10,10,10,0.8), 0 0px 2px #0a0a0a",
              }}
            >
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed montserrat-500 max-w-2xl mx-auto">
              I'm always excited to collaborate on projects that challenge conventions and push boundaries. 
              Whether you have a clear vision or just an idea that needs nurturing, let's explore what's possible together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="px-8 py-4 bg-orange-400/90 hover:bg-orange-400 text-slate-900 rounded-lg shadow-lg transition-all duration-300 text-lg font-semibold montserrat-500 hover:shadow-orange-400/40 hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-slate-800/60 hover:bg-slate-700/70 border border-orange-400/30 hover:border-orange-400/60 rounded-lg shadow-lg transition-all duration-300 text-lg font-semibold montserrat-500 text-gray-100 hover:shadow-orange-400/20 hover:shadow-xl"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}