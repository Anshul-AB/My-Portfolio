"use client";
import React from "react";
import { motion } from "framer-motion";
import useInView from "@/app/components/common/useInView";
import FallingDropsBg from "@/app/components/common/FallingDropsBg";
import Heading from "@/app/components/common/Heading";

// Refined tech stack with important skills
const techCategories = {
  "Web & App Development": [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
  ],
  // "Data & Machine Learning": [
  //   "Python",
  //   "Data Cleaning",
  //   "Data Preprocessing",
  //   "Model Prediction",
  //   "Scikit-learn",
  //   "Pandas",
  //   "NumPy",
  // ],
  // "Deep Learning": [
  //   "Perceptron",
  //   "Artificial Neural Networks (ANN)",
  //   "Convolutional Neural Networks (CNN)",
  //   "TensorFlow",
  //   "Keras",
  // ],
  "Databases & Storage": ["MongoDB", "MySQL", "Redis", "Firebase"],
  "Deployment & Collaboration": ["Docker", "Vercel", "Git", "Render"],
};

const TechUsed = () => {
  const [techSectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id="techUsed"
      ref={techSectionRef}
      className="min-h-screen bg-[#0A1828] text-white flex pb-16 px-4 sm:px-8 md:px-20 flex-col items-center p-6"
    >
      <FallingDropsBg />

      <Heading title={"Skills & Tech Stack"} classname={"text-left"} />

      <div className="w-full flex flex-wrap justify-center gap-8 relative z-10">
        {Object.entries(techCategories).map(([category, techs], index) => (
          <div key={index} className="w-full max-w-sm">
            <h2 className="text-xl text-[#e2d0bd] font-semibold mb-4 border-b border-[#e2d0bd] pb-2 text-center">
              {category}
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {techs.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#fff3e5c3] text-center text-[#0A1828] text-md tracking-widest font-bold p-2 rounded-lg shadow-lg w-[120px] sm:w-[140px]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: inView ? 1 : 0,
                    opacity: inView ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.15,
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
