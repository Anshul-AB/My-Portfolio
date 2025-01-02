"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useInView from "@/app/components/common/useInView";
import ProjectCard from "@/app/components/common/ProjectCard";
import ProjectDetailCard from "@/app/components/common/ProjectDetailCard";
import Heading from "@/app/components/common/Heading"

export default function Home() {
  const [projectSectionRef, inView] = useInView();
  const [showDetails, setShowDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  // Project Data
  const projects = [
    {
      title: "Habitura - Habit Tracking App",
      description:
        "A habit tracker that helps you build and maintain good habits. Track progress, goals, and motivation with streaks and reminders.",
      techStack: "MERN Stack, Redis, Docker, Tailwind CSS, Firebase OAuth, Ant Design",
      features: [
        "OAuth Authentication via Firebase for secure user access.",
        "Performance optimization with Redis caching (30% faster response).",
        "Streaks, goals, and reminders for enhanced user motivation.",
        "Rate limiting to ensure 25% reduced downtime.",
      ],
      impact:
        "20% increase in user engagement, seamless CRUD operations with MongoDB, and efficient scalability with Docker deployment.",
      githubLink: "https://github.com/Anshul-AB/habitura",
      websiteLink: "https://github.com/yourusername/your-repo",
      dockerLink: "https://hub.docker.com/r/anshul100/habitura",
    },
    {
      title: "Vibing - Music App",
      description:
        "A Spotify-like music platform to upload tracks, create playlists, and enjoy personalized music experiences.",
      techStack: "MERN, Tailwind CSS, JWT Authentication, Cloudflare, Docker",
      features: [
        "User authentication using JWT for secure access.",
        "Playlist management and personalized music recommendations.",
        "Optimized file storage with Cloudflare (99.9% uptime).",
        "Containerized using Docker for deployment.",
      ],
      impact:
        "20% reduction in login errors, enhanced authentication performance, and improved retention rates.",
      githubLink: "https://github.com/Anshul-AB/Vibing",
      websiteLink: "https://vibing.onrender.com/",
      dockerLink: "https://hub.docker.com/r/anshul100/vibing-music-app",
    },
  ];

  return (
    <div id="projects" className="px-20 bg-[#0A1828] h-screen">
<Heading title={"My Projects"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            ref={projectSectionRef}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-[#fff3e5c3] cursor-pointer"
            onClick={() => {
              setCurrentProject(project);
              setShowDetails(true);
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 50 : -100 }}
            transition={{ duration: 1, delay: index * 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl="https://via.placeholder.com/400x300"
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
              dockerLink={project.dockerLink}
            />
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      {showDetails && currentProject && (
        <ProjectDetailCard
          title={currentProject.title}
          description={currentProject.description}
          techStack={currentProject.techStack}
          features={currentProject.features}
          impact={currentProject.impact}
          githubLink={currentProject.githubLink}
          websiteLink={currentProject.websiteLink}
          dockerLink={currentProject.dockerLink}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}
