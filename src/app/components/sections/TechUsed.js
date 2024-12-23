"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "@/app/components/common/useInView";
import FallingDropsBg from "@/app/components/common/FallingDropsBg"


// Tech stack data categorized
const techCategories = {
  Frontend: [
    "React.js",
    "Next.js",
    "Bootstrap 5",
    "Tailwind CSS",
    "Sass",
    "Ant Design",
    "Framer Motion",
  ],
  Backend: ["Node.js", "Express.js", "PHP", "Laravel"],
  Database: ["MongoDB", "MySQL", "Redis"],
  Authentication: ["Firebase", "OAuth", "JWT"],
  Deployment: ["Docker", "Render", "Vercel"],
  Tools: [
    "Figma",
    "Docker",
    "Socket.IO",
    "Rate Limiting",
    "Aggregation Framework",
    "MongoDB Compass/Atlas",
    "Git",
    "VS Code",
  ],
  "State Management": ["Context API", "Redux Toolkit"],
};

const TechUsed = () => {
  const [techSectionRef, inView] = useInView();

  return (
    <div
      id="techUsed"
      ref={techSectionRef}
      className="min-h-screen bg-[#0A1828] text-white flex pb-16 px-20 flex-col items-center p-6"
    >
      <FallingDropsBg/>
      <h1 className="text-[110px] text-[#BFA181] text-left w-full mb-10">Tech Stack</h1>
      <div className="w-full flex flex-wrap justify-center gap-8">
        {Object.entries(techCategories).map(([category, techs], index) => (
          <div key={index} className="w-full max-w-sm">
            <h2 className="text-xl text-[#e2d0bd] font-semibold mb-4 border-b border-[#e2d0bd] pb-2 text-center">
              {category}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techs.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#fff3e5c3] fff3e5aa text-center text-[#0A1828] text-md tracking-widest font-bold p-2 rounded-lg shadow-lg w-[120px]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: inView ? 1 : 0,
                    opacity: inView ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: idx * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechUsed;
