import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiMongodb, SiAmazonaws, SiGraphql, SiFramer } from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";


const socialLinks = [
  { href: "mailto:youremail@example.com", icon: <FaEnvelope />, label: "Email" },
  { href: "https://github.com/Clementvsc", icon: <FaGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin />, label: "LinkedIn" },
];

const skills = [
  { label: "React",        iconLib: "fa", iconName: "FaReact",        color: "#60DAFB" },
  { label: "TypeScript",   iconLib: "si", iconName: "SiTypescript",   color: "#3178c6" },
  { label: "Next.js",      iconLib: "si", iconName: "SiNextdotjs",    color: "#000"    },
  { label: "Node.js",      iconLib: "fa", iconName: "FaNodeJs",       color: "#509941" },
  { label: "Python",       iconLib: "fa", iconName: "FaPython",       color: "#3776ab" },
  { label: "MongoDB",      iconLib: "si", iconName: "SiMongodb",      color: "#47A248" },
  { label: "PostgreSQL",   iconLib: "si", iconName: "SiPostgresql",   color: "#336791" },
  { label: "AWS",          iconLib: "si", iconName: "SiAmazonaws",    color: "#ff9900" },
  { label: "Docker",       iconLib: "fa", iconName: "FaDocker",       color: "#0db7ed" },
  { label: "GraphQL",      iconLib: "si", iconName: "SiGraphql",      color: "#e535ab" },
  { label: "TailwindCSS",  iconLib: "si", iconName: "SiTailwindcss",  color: "#36B7F0" },
  { label: "Framer Motion",iconLib: "si", iconName: "SiFramer",       color: "#F56CAC" },
];
<section id="skills" className="py-16">
  <h2 className="text-3xl font-bold text-purple-500 mb-10 text-center">
    Skills & Tools
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
    {skills.map(({ label, iconLib, iconName, color }) => {
      const IconComponent = iconLib === "fa" ? FaIcons[iconName] : SiIcons[iconName];
      return (
        <div key={label} className="flex flex-col items-center p-5 glass rounded-2xl gap-2 cursor-pointer">
          {IconComponent ? <IconComponent size={28} color={color} /> : null}
          <span className="font-semibold mt-1 text-zinc-800">{label}</span>
        </div>
      );
    })}
  </div>
</section>


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
