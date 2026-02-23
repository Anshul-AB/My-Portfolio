"use client";
import Link from "next/link";
import { FaGithub, FaDocker, FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  title,
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
        <button  className="text-[#178582] text-justify tracking-wider text-base" title="Project details">
          Click to know more...
        </button>
      </div>

      {/* links */}
     <div className="absolute bottom-0 right-0 px-6 py-4 flex space-x-4">

  {/* GitHub */}
  <Link
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative text-[#0A1828] transition-all duration-300 hover:text-[#178582] hover:scale-125"
  >
    <FaGithub size={24} className="animate-pulse group-hover:animate-none" />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 
      opacity-0 group-hover:opacity-100 text-xs bg-black text-white 
      px-2 py-1 rounded transition">
      Code
    </span>
  </Link>

  {/* Live Website */}
  <Link
    href={websiteLink}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative text-[#0A1828] transition-all duration-300 hover:text-[#178582] hover:scale-125"
  >
    <FaGlobe size={24} className="animate-pulse" />
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 
      opacity-0 group-hover:opacity-100 text-xs bg-black text-white 
      px-2 py-1 rounded transition">
      Live Demo
    </span>
  </Link>

  {/* Docker */}
  {dockerLink && (
    <Link
      href={dockerLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-[#0A1828] transition-all duration-300 hover:text-[#178582] hover:scale-125"
    >
      <FaDocker size={24} className="animate-pulse" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 
        opacity-0 group-hover:opacity-100 text-xs bg-black text-white 
        px-2 py-1 rounded transition">
        Docker
      </span>
    </Link>
  )}

</div>
    </div>
  );
};

export default ProjectCard;
