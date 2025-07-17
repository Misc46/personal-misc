"use client";

import React, { useState } from "react";
import Dither from "../ReactBits/Dither/Dither";
import SplitText from "../ReactBits/SplitText/SplitText";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const contactMethods = [
  {
    title: "Email",
    description: "Reach out directly for project inquiries or collaborations",
    icon: "📧",
    detail: "hafidzdwifebri23@gmail.com",
    action: "mailto:hafidzdwifebri23@gmail.com",
    copyText: "hafidzdwifebri23@gmail.com"
  },
  {
    title: "Professional Network",
    description: "Connect with me on LinkedIn for professional opportunities",
    icon: "💼",
    detail: "linkedin.com/in/dwifebrian",
    action: "https://www.linkedin.com/in/dwifebrian/",
    copyText: "linkedin.com/in/dwifebrian"
  },
  {
    title: "Code Repository",
    description: "Explore my open-source contributions and projects",
    icon: "🔗",
    detail: "github.com/misc46",
    action: "https://github.com/misc46",
    copyText: "github.com/misc46"
  },
  {
    title: "Phone",
    description: "Call me for urgent matters or quick discussions",
    icon: "📱",
    detail: "+62 896 0323 0206",
    action: "tel:+6289603230206",
    copyText: "+62 896 0323 0206"
  }
];


  const handleCopyToClipboard = (text: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    // You could add a toast notification here if desired
  };

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
          {/* Header */}
          <div className="text-center mb-16" style={{
                color: "#fca311",
                textShadow: "0 2px 8px rgba(10,10,10,0.8), 0 0px 2px #0a0a0a",
              }}>
            <SplitText
              text="Get In Touch"
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
            <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed montserrat-500">
              Let's start a conversation about your next project, collaboration, or just connect over shared interests in technology and creativity.
            </p>
          </div>

          {/* Contact Methods */}
          <section className="space-y-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="backdrop-blur-sm rounded-xl shadow-xl p-6 transition-all duration-300 hover:scale-105 group relative"
                style={getCardStyle(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-orange-400 group-hover:text-orange-300 transition-colors fugaz-one">
                      {method.title}
                    </h3>
                    <p className="text-gray-200 text-sm mb-2 montserrat-500">
                      {method.description}
                    </p>
                    <p className="text-orange-200 font-medium">
                      {method.detail}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => handleCopyToClipboard(method.copyText, e)}
                      className="p-2 rounded-lg bg-orange-400/20 hover:bg-orange-400/30 text-orange-400 hover:text-orange-300 transition-all duration-300 group/copy"
                      title="Copy to clipboard"
                    >
                      <svg className="w-5 h-5 group-hover/copy:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="p-2 rounded-lg bg-orange-400/20 hover:bg-orange-400/30 text-orange-400 hover:text-orange-300 transition-all duration-300 group/link"
                      title="Open link"
                    >
                      <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Additional Information */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm rounded-xl shadow-xl p-6"
                   style={{
                     background: "linear-gradient(135deg, rgba(252, 163, 17, 0.1) 0%, rgba(20, 33, 61, 0.3) 100%)",
                     border: "1px solid rgba(252, 163, 17, 0.2)",
                   }}>
                <h3 className="text-xl font-bold mb-4 text-orange-400 fugaz-one">
                  🌍 Global Collaboration
                </h3>
                <p className="text-gray-200 leading-relaxed montserrat-500">
                  Based in Jakarta, but working with clients and teams worldwide. 
                  I'm comfortable with remote collaboration and different time zones.
                </p>
              </div>
              
              <div className="backdrop-blur-sm rounded-xl shadow-xl p-6"
                   style={{
                     background: "linear-gradient(135deg, rgba(20, 33, 61, 0.3) 0%, rgba(252, 163, 17, 0.1) 100%)",
                     border: "1px solid rgba(252, 163, 17, 0.2)",
                   }}>
                <h3 className="text-xl font-bold mb-4 text-orange-400 fugaz-one">
                  ⚡ Response Time
                </h3>
                <p className="text-gray-200 leading-relaxed montserrat-500">
                  I typically respond to messages within 24-48 hours. For urgent matters, 
                  please call or mention urgency in your message.
                </p>
              </div>
            </div>
          </section>

          {/* Availability Status */}
          <section className="mb-16">
            <div className="backdrop-blur-sm rounded-xl shadow-xl p-6 text-center"
                 style={{
                   background: "linear-gradient(135deg, rgba(252, 163, 17, 0.15) 0%, rgba(20, 33, 61, 0.4) 100%)",
                   border: "1px solid rgba(252, 163, 17, 0.3)",
                 }}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-orange-400 fugaz-one">
                  Currently Available for New Projects
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed montserrat-500 max-w-2xl mx-auto">
                I'm actively looking for new opportunities and collaborations. Whether you need a full-stack developer, 
                want to discuss a project idea, or just want to connect, I'd love to hear from you.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="backdrop-blur-sm rounded-2xl shadow-2xl p-8 mx-auto max-w-3xl"
                 style={{
                   background: "linear-gradient(135deg, rgba(252, 163, 17, 0.2) 0%, rgba(20, 33, 61, 0.6) 100%)",
                   border: "1px solid rgba(252, 163, 17, 0.4)",
                 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400 fugaz-one">
                Ready to Start Something Amazing?
              </h2>
              <p className="text-gray-200 mb-6 leading-relaxed montserrat-500">
                Whether you have a clear vision or just a spark of an idea, I'm here to help bring it to life. 
                Every great project starts with a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/projects"
                  className="px-8 py-4 bg-slate-800/60 hover:bg-slate-700/70 border border-orange-400/30 hover:border-orange-400/60 rounded-lg shadow-lg transition-all duration-300 text-lg font-semibold montserrat-500 text-gray-100 hover:shadow-orange-400/20 hover:shadow-xl"
                >
                  View My Work
                </a>
                <a
                  href="/thoughts"
                  className="px-8 py-4 bg-slate-800/60 hover:bg-slate-700/70 border border-orange-400/30 hover:border-orange-400/60 rounded-lg shadow-lg transition-all duration-300 text-lg font-semibold montserrat-500 text-gray-100 hover:shadow-orange-400/20 hover:shadow-xl"
                >
                  Read My Thoughts
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}