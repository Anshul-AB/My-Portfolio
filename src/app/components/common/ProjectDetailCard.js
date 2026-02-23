"use client";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const ProjectDetailCard = ({
  title,
  description,
  techStack,
  features,
  impact,
  githubLink,
  websiteLink,
  dockerLink,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
    >
  <div className="w-5/6 h-5/6 bg-[#06101b] overflow-y-auto shadow-lg rounded-2xl">
    {/* modal content */}

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-5xl text-[#BFA181] hover:text-[#cfc0af]"
      >
        <RxCross1/>
      </button>

      {/* Content */}
      <div className="p-8 sm:p-12">
        {/* Project Title */}
        <h2 className="text-6xl text-[#e2d0bd] mb-6">{title}</h2>

        {/* Description */}
        <p className="text-lg text-[#ddd] text-wider mb-8 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-3xl  text-[#e2d0bd] mb-4">
            Tech Stack 🚀
          </h3>
          <p className="text-lg text-[#ddd] text-wider">{techStack}</p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-3xl  text-[#e2d0bd] mb-4">
            Key Features 🛠️
          </h3>
          <ul className="list-disc text-lg ml-6 text-[#ddd] text-wider">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Impact / Results */}
        <div className="mb-8">
          <h3 className="text-3xl  text-[#e2d0bd] mb-4">
            Impact & Results 📈
          </h3>
          <p className="text-lg text-[#ddd] text-wider">{impact}</p>
        </div>

      </div>
        </div>

    </motion.div>
  );
};

export default ProjectDetailCard;
