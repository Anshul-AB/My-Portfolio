"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useInView from "@/app/components/common/useInView";
import { useState } from "react";
import Heading from "@/app/components/common/Heading"


export default function Contact() {
  const [contactRef, inView] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  // const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        // setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      } else {
        // setStatus("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      // setStatus("An error occurred. Please try again.");
    }
  };

  const socialMediaIcons = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/Anshul-AB",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/anshul101/",
    },
    // {
    //   name: "Twitter",
    //   icon: <FaTwitter />,
    //   link: "https://twitter.com/anshul",
    // },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:anshul.b100@gmail.com",
    },
  ];

  return (
    <div
      id="contact"
      className="relative flex justify-center items-center min-h-screen pb-20 bg-[#0A1828] md:px-20"
    >
      <div className="">
        {/* Heading Animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          ref={contactRef}
        >
         <Heading
        title="Contact Me"
      />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-center text-[#fff3e5c3] text-2xl mb-7"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: inView ? 1 : 20, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          ref={contactRef}
        >
          Hiring for tech roles? Let&apos;s Talk!
        </motion.p>

        {/* Social Media Icons */}
        <div className=" flex justify-center items-center space-x-3 mb-7">
          {socialMediaIcons.map((social, index) => (
            <motion.a
              ref={contactRef}
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#BFA181] text-[#fff3e5c3] p-4 text-xl rounded-full transform hover:scale-110 hover:text-[#BFA181]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
              transition={{
                delay: 0.8 + index * 0.2, // Staggered effect
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          ref={contactRef}
        >
          {/* Form */}
          <div className="flex flex-col space-y-3 items-start p-3 md:p-10 w-full bg-[#fff3e5c3] rounded-2xl  ">
            <h1 className="text-3xl text-primary text-[#0A1828]">
              Send A Message
            </h1>
            <div className="space-y-3 w-full">
              <div className="flex flex-col space-y-2 sm:space-y-0 xl:flex-row xl:space-x-3 sm:flex-row sm:space-x-3 w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  placeholder="Your Name*"
                  onChange={handleChange}
                  className="p-5 rounded-xl outline-none bg-[#0A1828] text-[#fff3e5c3] text-wide shadow-md w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  placeholder="Your Email*"
                  onChange={handleChange}
                  className="p-5 rounded-xl outline-none bg-[#0A1828] text-[#fff3e5c3] text-wide shadow-md w-full"
                />
                <input
                  type="phone"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="Your Phone Number"
                  onChange={handleChange}
                  className="p-5 rounded-xl outline-none bg-[#0A1828] text-[#fff3e5c3] text-wide shadow-md w-full"
                />
              </div>
              <textarea
                type="textarea"
                name="message"
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
                className="p-5 rounded-xl w-full bg-[#0A1828] text-[#fff3e5c3] text-wide outline-none shadow-md"
              ></textarea>
            </div>
            <div className="flex justify-center" onClick={handleSubmit}>
              <motion.button
                type="submit"
                className="bg-[#0A1828] text-[#fff3e5c3] transition-all duration-300 font-semibold px-6 py-2 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
