"use client";
import React, { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { TfiMinus } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const [showAbout, setShowAbout] = useState(false);

  // Animation variants for sliding in and out
  const slideInVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 1.3 },
    },
  };

  return (
    <div id="about" className="w-full h-screen  bg-[#0A1828]">

      {/* Heading */}
      <div className="h-full flex flex-col sm:flex-row justify-center items-center space-x-5">
        <h1 className="text-[100px] md:text-[120px] lg:text-[150px] text-[#BFA181] font-black ">About Me</h1>
        <div
          className="border-2 border-[#BFA181] p-3 rounded-full hover:scale-95 transition-all duration-300 text-[#BFA181]   text-[40px]  md:text-[60px] lg:text-[80px] font-extralight cursor-pointer"
          onClick={() => setShowAbout(!showAbout)}
        >
          <TfiPlus />
        </div>
      </div>

      {/* Content */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            className="  fixed
  inset-0
  m-auto
  w-5/6
  h-5/6
  p-6
  bg-[#06101b]
  text-[#e3e2df]
  rounded-sm
  px-10
  md:px-20
  z-50"

            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* close content button */}
            <div className="flex justify-center items-center space-x-3  mb-7">
              <h1 className="text-3xl text-[#e3e2df] ">About Me</h1>
              <div
                className="border-2 border-[#e3e2df] p-3 rounded-full w-fit text-[#e3e2df] text-lg font-extralight hover:scale-95 transition-all duration-300"
                onClick={() => setShowAbout((prev) => !prev)}
              >
                <TfiMinus />
              </div>
            </div>

            <div className="grid grid-rows-2 md:grid-cols-2 md:place-items-start">
              {/* About me content */}
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-5xl lg:text-6xl text-[#BFA181]">
                  I ❤️ to build things
                </h2>
                <br />
                <p className="mt-2 text-xs sm:text-sm lg:text-lg text-justify text-[#e3e2df] tracking-wider ">
                  I’m Anshul, a Full-Stack MERN Developer with 1+ year of experience building
responsive, user-friendly web applications. I work with React, Redux Toolkit,
Next.js, and REST APIs to turn designs into fast, scalable, and maintainable
products.
<br/><br/>

I focus on clean UI, smooth user experience, and writing code that’s easy to
extend as your product grows. If you’re looking for someone who cares about both
functionality and polish.

                  <br /> <br /> Let’s build something impactful together! 😊
                </p>
              </div>

              {/* Image on the left*/}
              <div className="relative flex mx-auto items-center justify-center order-1 md:order-2">
                <div className="absolute w-[178px] h-[178px]  xs:w-[233px] lg:w-[303px]  xs:h-[233px] lg:h-[303px]  rounded-full bg-gradient-to-r from-[#BFA181] via-[#e3e2df] to-[#06101b] animate-spin-slow"></div>
                <div className="relative w-[175px] h-[175px]  xs:w-[230px] lg:w-[300px]  xs:h-[230px] lg:h-[300px] rounded-full bg-[#06101b] overflow-hidden">
                  <Image
                    src="/Anshul.png"
                    alt="Anshul's Picture"
                    width={700}
                    height={700}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutSection;
