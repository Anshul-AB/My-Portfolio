"use client";
import { motion } from "framer-motion";
import  Link  from "next/link";
import { RxCross1 } from "react-icons/rx";
import { FaGithub, FaDocker, FaGlobe } from "react-icons/fa";

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
      className="fixed bottom-0 left-0 w-full h-screen bg-[#06101b] z-50 overflow-hidden shadow-lg"
    >
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

        {/* Links */}
        <div className="flex justify-end flex-wrap gap-6 mt-4">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFA181] text-3xl  hover:text-[#cfc0af]"
            >
              <FaGithub/>
            </Link>
          )}
          {websiteLink && (
            <Link
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFA181] text-3xl  hover:text-[#cfc0af] underline"
            >
              <FaGlobe/>
            </Link>
          )}
          {dockerLink && (
            <Link
              href={dockerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFA181] text-3xl  hover:text-[#cfc0af] underline"
            >
              <FaDocker/>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailCard;
