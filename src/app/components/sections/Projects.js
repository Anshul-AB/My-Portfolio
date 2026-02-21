"use client";
import { motion } from "framer-motion";
import useInView from "@/app/components/common/useInView";
import ProjectCard from "@/app/components/common/ProjectCard";
import ProjectDetailCard from "@/app/components/common/ProjectDetailCard";
import Heading from "@/app/components/common/Heading"
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  // const [projectSectionRef, inView] = useInView();
  const [showDetails, setShowDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);


  // Project Data
  const projects = [
    {
      id:"habitura",
      title: "Habitura - Habit Tracking App",
      description:
        "A habit tracker that helps you build and maintain good habits. Track progress, goals, and motivation with streaks and reminders.",
      techStack: "MERN Stack, Redis, Docker, Tailwind CSS, Firebase OAuth, Ant Design",
      images:"/habitura.jpeg",
      features: [
        "OAuth Authentication via Firebase for secure user access.",
        "Performance optimization with Redis caching (30% faster response).",
        "Streaks, goals, and reminders for enhanced user motivation.",
        "Rate limiting to ensure 25% reduced downtime.",
      ],
      impact:
        "20% increase in user engagement, seamless CRUD operations with MongoDB, and efficient scalability with Docker deployment.",
      githubLink: "https://github.com/Anshul-AB/habitura",
      websiteLink: "https://habitura-backend.onrender.com/",
      dockerLink: "https://hub.docker.com/r/anshul100/habitura",
    },
    {
      id:"form-builder",
       title: "No-Code Form Builder",
  description:
    "A no-code form creation tool that lets users visually build forms by selecting required fields and instantly generate the corresponding frontend code for reuse across applications.",
  techStack: "React, Tailwind CSS, JavaScript",
  images:"/formBuilder.jpeg",
  features: [
    "No-code interface for building custom forms.",
    "Live form rendering as fields are added or removed.",
    "Instant code generation based on user-selected inputs.",
    "Supports multiple input types and validations.",
  ],
  impact:
    "Enabled rapid form creation for internal tools and landing pages, eliminating repetitive manual form coding.",
      githubLink: "https://github.com/Anshul-AB/Form-Builder-",
      websiteLink: "https://form-builder-opal-two.vercel.app/",
    },
    {
      id:"taskflow",
        title: "Task Management App",
        description:
          "A full-stack task management application with role-based access control, enabling admins to assign tasks and users to track and update their task progress efficiently.",
        techStack:
          "React, Node.js, Express, Firebase Firestore, JWT, Tailwind CSS",
          images:"/taskManagement.jpeg",
        features: [
          "JWT-based authentication with role-based access for Admin and User workflows.",
          "Admin functionality to create, assign, and manage tasks across users.",
          "User-specific task views with real-time status updates (Pending, In Progress, Completed).",
          "Protected routes and middleware-based authorization for secure access control.",
          "Responsive UI built with Tailwind CSS for a clean and intuitive user experience.",
        ],
        impact:
          "Delivered a production-ready full-stack application with secure authentication, scalable Firestore integration, and live deployment on Vercel and Render.",
        githubLink: "https://github.com/Anshul-AB/task-management",
        websiteLink: "https://task-management-two-lovat.vercel.app",
    },
    {id:"vibing",
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
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <div id="projects" className="px-20 bg-[#0A1828] h-screen">
<Heading title={"My Projects"} />
      <Slider {...settings}>
  {projects.map((project, index) => (
    <div key={project.id} className="px-4">
      <motion.div
        className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-[#fff3e5c3] cursor-pointer"
        onClick={() => {
          setCurrentProject(project);
          setShowDetails(true);
        }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          imageUrl={project.images}
          githubLink={project.githubLink}
          websiteLink={project.websiteLink}
          dockerLink={project.dockerLink}
        />
      </motion.div>
    </div>
  ))}
</Slider>


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
