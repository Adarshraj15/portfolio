// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-36 px-[8vw] md:px-[10vw] lg:px-[18vw] font-sans
                 bg-gradient-to-b from-[#020617] via-[#0b1120] to-[#020617]"
    >
      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide">
          Skills
        </h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
          Technologies and tools I use to design, build, and scale modern web
          applications.
        </p>
      </div>

      {/* Skill Sections */}
      <div className="space-y-28">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="grid md:grid-cols-[280px_1fr] gap-12 items-start"
          >
            {/* Category Badge */}
            <div className="relative">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full
                              bg-white/5 backdrop-blur-md
                              border border-white/10
                              shadow-[0_0_30px_rgba(99,102,241,0.25)]">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></span>
                <h3
                  className="text-lg font-semibold tracking-wide
                             text-transparent bg-clip-text
                             bg-gradient-to-r from-blue-400 to-purple-500"
                >
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex items-center gap-4
                             px-5 py-3 rounded-2xl
                             bg-gradient-to-br from-white/5 to-white/[0.02]
                             border border-white/10
                             backdrop-blur-md
                             transition-all duration-300
                             hover:-translate-y-1
                             hover:border-blue-500/40
                             hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)]"
                >
                  {/* Icon Container */}
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl
                               bg-gradient-to-br from-white/10 to-white/5
                               border border-white/10
                               group-hover:from-blue-500/20
                               group-hover:to-purple-500/20
                               transition"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 opacity-80
                                 group-hover:opacity-100"
                    />
                  </div>

                  {/* Name */}
                  <span className="text-sm text-gray-300 group-hover:text-white">
                    {skill.name}
                  </span>

                  {/* Hover Glow */}
                  <span
                    className="absolute inset-0 rounded-2xl opacity-0
                               group-hover:opacity-100 transition
                               pointer-events-none
                               bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
