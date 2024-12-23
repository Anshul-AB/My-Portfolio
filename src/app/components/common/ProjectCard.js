"use client";
import Link from "next/link";
import { FaGithub, FaDocker, FaGlobe } from "react-icons/fa"; // Importing icons from react-icons

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubLink,
  websiteLink,
  dockerLink,
}) => {
  return (
    <div className="relative h-full">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4 mb-10">
        <div className="font-bold border-b-4 w-fit pb-2 border-[#0A1828] text-[#0A1828] text-3xl mb-2">
          {title}
        </div>
        <p className="text-[#178582] text-justify tracking-wider text-base">
          {description}
        </p>
      </div>

      {/* links */}
      <div className="absolute bottom-0 right-0 px-6 py-4 flex space-x-4">
        {/* GitHub Icon */}
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A1828] hover:text-[#178582] transition-colors"
        >
          <FaGithub size={24} />
        </Link>

        {/* Website (Globe) Icon */}
        <Link
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A1828] hover:text-[#178582] transition-colors"
        >
          <FaGlobe size={24} />
        </Link>

        {/* Docker Icon */}
        <Link
          href={dockerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A1828] hover:text-[#178582] transition-colors"
        >
          <FaDocker size={24} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
