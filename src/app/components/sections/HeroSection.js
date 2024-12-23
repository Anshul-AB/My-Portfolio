"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useInView from "@/app/components/common/useInView";
import FallingDropsBg from "../common/FallingDropsBg";

const HeroSection = () => {
  const [homeRef, inView] = useInView();

  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100; // Typing and deleting speed
    const currentTitle = titles[titleIndex];

    const typingTimeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing logic
        if (charIndex < currentTitle.length) {
          setCurrentText((prev) => prev + currentTitle[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting logic
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to the next title
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  return (
    <section
      id="home"
      className="h-screen w-full flex justify-left bg-gradient-to-br from-[#0A1828] via-[#1E2A3D] to-black items-center bg-fixed relative px-20"
    >
      <FallingDropsBg/>

      
      {/* left side*/}
      <motion.div
        ref={homeRef}
        className="relative z-10 text-center space-y-8 md:space-y-6 lg:space-y-10 py-16 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h2
          className="text-lg md:text-2xl text-left text-[#e2d0bd] z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          CODE. CREATE. INNOVATE.
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-[110px] text-[#BFA181] text-left font-extralight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {currentText}
          <span className="blinking-cursor text-[#BFA181] text-opacity-50 font-extralight">
            |
          </span>
        </motion.h1>

        <motion.h1
          className="text-lg text-[#e2d0bd] text-left tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          I bring ideas to life through clean code, creating user-friendly
          experiences and building strong, reliable systems in the process.
        </motion.h1>

        {/* <motion.div
          className=" bg-red-200 shadow-inner shadow-black rounded-md w-2/3 mx-auto flex justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex items-center px-5 space-x-2">
            <motion.h1
              className="text-xl text-[#711734] tracking-wider "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Hiring for tech roles?
            </motion.h1>
            <motion.h1
              className="text-xl text-[#fbc4d5] tracking-wider p-3 rounded-md shadow-lg bg-[#711734]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Let's Talk
            </motion.h1>
          </div>
          <motion.h1
            className="text-xl text-[#fbc4d5] tracking-wider p-3 rounded-md shadow-lg bg-[#711734]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Resume
          </motion.h1>
        </motion.div> */}
      </motion.div>

      {/* Image on the right */}
      {/* <div className="relative flex items-center justify-center mr-20">
        <motion.div
          ref={homeRef}
          className="absolute w-[303px] h-[303px] rounded-full bg-gradient-to-r from-[#a8a7a3] via-[#e3e2df] to-[#5d001e] animate-spin-slow"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="relative w-[300px] h-[300px] rounded-full bg-red-100 overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/Anshul.png"
            alt="Anshul's Picture"
            width={700}
            height={700}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div> */}

      <div className="fixed bottom-0 right-0 font-black text-3xl z-30 p-4 text-[#0b0c10] text-glow">
        Anshul.
      </div>
    </section>
  );
};

export default HeroSection;
