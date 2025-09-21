import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiMongodb, SiAmazonaws, SiGraphql, SiFramer } from "react-icons/si";

const socialLinks = [
  { href: "mailto:youremail@example.com", icon: <FaEnvelope />, label: "Email" },
  { href: "https://github.com/Clementvsc", icon: <FaGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin />, label: "LinkedIn" },
];

const skills = [
  { label: "React", icon: <FaReact color="#60DAFB" size={30} /> },
  { label: "TypeScript", icon: <SiTypescript color="#3178c6" size={30} /> },
  { label: "Next.js", icon: <SiNextdotjs color="#000" size={30} /> },
  { label: "Node.js", icon: <FaNodeJs color="#509941" size={30} /> },
  { label: "Python", icon: <FaPython color="#3776ab" size={30} /> },
  { label: "MongoDB", icon: <SiMongodb color="#47A248" size={30} /> },
  { label: "PostgreSQL", icon: <SiPostgresql color="#336791" size={30} /> },
  { label: "AWS", icon: <SiAmazonaws color="#ff9900" size={30} /> },
  { label: "Docker", icon: <FaDocker color="#0db7ed" size={30} /> },
  { label: "GraphQL", icon: <SiGraphql color="#e535ab" size={30} /> },
  { label: "TailwindCSS", icon: <SiTailwindcss color="#36B7F0" size={30} /> },
  { label: "Framer Motion", icon: <SiFramer color="#F56CAC" size={30} /> },
];

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Beautiful e-commerce SPA (React, Stripe) with cart, payments, and product dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=450&q=80",
    gh: "https://github.com/Clementvsc/demo-ecommerce",
    live: "#"
  },
  {
    title: "Realtime Chat App",
    desc: "Socket.io chat with rooms, notifications, and modern UI.",
    tech: ["React", "Socket.io", "Express", "TailwindCSS"],
    img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=450&q=80",
    gh: "https://github.com/Clementvsc/demo-chat",
    live: "#"
  },
  {
    title: "Task Management Dashboard",
    desc: "Drag-and-drop Kanban board with analytics and team collaboration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=450&q=80",
    gh: "https://github.com/Clementvsc/demo-kanban",
    live: "#"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            Clement Vsc
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Full-Stack Developer & Creative Problem Solver
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
          >
            Crafting digital experiences with modern technologies and innovative solutions.
            Passionate about creating scalable applications that make a difference.
          </motion.p>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  {skill.icon}
                  <span className="font-medium text-gray-200">{skill.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.gh}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      🔗 Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <motion.a
            href="mailto:youremail@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <FaEnvelope /> Get In Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
