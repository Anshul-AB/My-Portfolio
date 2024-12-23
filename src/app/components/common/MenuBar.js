"use client"
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function MenuBar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-36 right-0 text-[#e7cbae] border border-[#e7cbae] flex flex-col justify-center gap-8 py-3 z-50  m-4 p-3 rounded-md  shadow-[0_0_8px_#e7cbae] transition-all duration-300  hover:shadow-[0_0_10px_#e7cbae,0_0_15px_#e7cbae]">
      {/* Home */}
      <div
        onClick={() => scrollToSection("home")}
        className="flex flex-col items-center hover:text-[#178582] transition duration-300 cursor-pointer"
      >
        <FaHome size={18} />
        <span className="text-[12px]">Home</span>
      </div>

      {/* About */}
      <div
        onClick={() => scrollToSection("about")}
        className="flex flex-col items-center hover:text-[#178582] transition duration-300 cursor-pointer"
      >
        <FaUser size={18} />
        <span className="text-[12px]">About</span>
      </div>

      {/* Tech */}
      <div
        onClick={() => scrollToSection("techUsed")}
        className="flex flex-col items-center hover:text-[#178582] transition duration-300 cursor-pointer"
      >
        <FaCode size={18} />
        <span className="text-[12px]">Tech</span>
      </div>

      {/* Projects */}
      <div
        onClick={() => scrollToSection("projects")}
        className="flex flex-col items-center hover:text-[#178582] transition duration-300 cursor-pointer"
      >
        <FaProjectDiagram size={18} />
        <span className="text-[12px]">Projects</span>
      </div>

      {/* Contact */}
      <div
        onClick={() => scrollToSection("contact")}
        className="flex flex-col items-center hover:text-[#178582] transition duration-300 cursor-pointer"
      >
        <FaEnvelope size={18} />
        <span className="text-[12px]">Contact</span>
      </div>
    </div>
  );
}
