"use client";

import React from "react";
import { motion } from "framer-motion";

const WavesBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* First Curved Wave */}
      <motion.div
        className="absolute bottom-0 w-full"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="wave wave1"></div>
      </motion.div>

      {/* Second Curved Wave */}
      <motion.div
        className="absolute bottom-0 w-full"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="wave wave2"></div>
      </motion.div>

      {/* Third Curved Wave */}
      <motion.div
        className="absolute bottom-0 w-full"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="wave wave3"></div>
      </motion.div>

      <style>
        {`
          .wave {
            width: 120%;
            
            background-color: transparent;
            position: absolute;
            bottom: -300px;
            left:-300px;
            clip-path: circle(100%);
            border-radius: 100%;
          }

          .wave1 {
                        background-color:  #024950;
            animation: waveAnimation 10s infinite linear;
            height: 470px;
            width: 80%;
            opacity: 0.8;

          }

          .wave2 {
                        background-color:  #66fcf1;

            animation: waveAnimation 12s infinite linear;
            height: 380px;
            width: 70%;
                        opacity: 0.8;

          }

          .wave3 {
                      background-color:  #0fa4af;
opacity: 0.5;
            animation: waveAnimation 8s infinite linear;
            height: 430px;
            width: 60%;
          }

          @keyframes waveAnimation {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px); /* Moves up */
            }
            100% {
              transform: translateY(0); /* Returns to the starting position */
            }
          }
        `}
      </style>
    </div>
  );
};

export default WavesBackground;
