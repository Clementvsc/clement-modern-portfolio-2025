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
    gh: "https://github.com/Clementvsc/demo-ecommerce", live: "#"
  },
  {
    title: "Realtime Chat App",
