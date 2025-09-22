import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const skills = [
  { label: "React", iconLib: "fa", iconName: "FaReact", color: "#60DAFB" },
  { label: "TypeScript", iconLib: "si", iconName: "SiTypescript", color: "#3178c6" },
  { label: "Next.js", iconLib: "si", iconName: "SiNextdotjs", color: "#000" },
  { label: "Node.js", iconLib: "fa", iconName: "FaNodeJs", color: "#509941" },
  { label: "Python", iconLib: "fa", iconName: "FaPython", color: "#3776ab" },
  { label: "MongoDB", iconLib: "si", iconName: "SiMongodb", color: "#47A248" },
  { label: "PostgreSQL", iconLib: "si", iconName: "SiPostgresql", color: "#336791" },
  { label: "AWS", iconLib: "si", iconName: "SiAmazonaws", color: "#ff9900" },
  { label: "Docker", iconLib: "fa", iconName: "FaDocker", color: "#0db7ed" },
  { label: "GraphQL", iconLib: "si", iconName: "SiGraphql", color: "#e535ab" },
  { label: "TailwindCSS", iconLib: "si", iconName: "SiTailwindcss", color: "#36B7F0" },
  { label: "Framer Motion", iconLib: "si", iconName: "SiFramer", color: "#F56CAC" },
];

const socialLinks = [
  { href: "mailto:youremail@example.com", icon: <FaIcons.FaEnvelope />, label: "Email" },
  { href: "https://github.com/Clementvsc", icon: <FaIcons.FaGithub />, label: "GitHub" },
  { href: "https://linkedin.com/in/yourprofile", icon: <FaIcons.FaLinkedin />, label: "LinkedIn" },
];

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Modern e-commerce SPA (React, Stripe) with payments and dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=450&q=80",
    gh: "#", live: "#"
  },
  {
    title: "Chat App",
    desc: "Socket.io real-time chat with team collaboration and AI bot demo.",
    tech: ["Next.js", "OpenAI", "Socket.io"],
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=450&q=80",
    gh: "#", live: "#"
  },
  {
    title: "Analytics Dashboard",
    desc: "Interactive analytics dashboard with real-time data and custom D3.js charts.",
    tech: ["React", "D3.js", "Express"],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=450&q=80",
    gh: "#", live: "#"
  },
];

export default function App() {
  return (
    <div className="relative font-sans bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 min-h-screen overflow-x-hidden">
      {/* Animated mesh/gradient SVG background */}
      <svg className="absolute left-1/2 top-0 -translate-x-1/2 z-0 w-full h-[900px] pointer-events-none select-none" aria-hidden="true">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="80%">
            <stop stopColor="#60A5FA" offset="0%" />
            <stop stopColor="#A78BFA" offset="100%" />
          </radialGradient>
        </defs>
        <ellipse cx="50%" cy="30%" rx="900" ry="230" fill="url(#g1)" opacity=".16" />
        <ellipse cx="16%" cy="55%" rx="185" ry="100" fill="#8b5cf668" opacity=".19" />
        <ellipse cx="87%" cy="38%" rx="180" ry="90" fill="#38bdf85e" opacity=".14" />
      </svg>

      {/* NavBar */}
      <nav className="fixed left-1/2 z-40 -translate-x-1/2 top-5 px-8 py-2 flex gap-8 glass items-center border border-white/25">
        <span className="font-bold text-primary text-2xl tracking-tight">CV</span>
        <div className="hidden md:flex gap-4">
          {["About", "Skills", "Projects", "Contact"].map((it) => (
            <a key={it} href={`#${it.toLowerCase()}`} className="text-zinc-800 hover:text-primary font-semibold">{it}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="section flex-col items-center justify-center text-center min-h-[85vh]" id="home">
        <motion.div className="glass p-10 sm:p-14 mt-20 max-w-xl relative z-10 flex flex-col items-center gap-7"
          initial={{ y: 42, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.13, duration: 0.88 } }}>
          <img src="https://ui-avatars.com/api/?name=Clement+VSC&background=60A5FA&color=fff&size=160" alt="Avatar" className="rounded-full border-8 border-purple-300 shadow-xl mb-1" />
          <motion.h1 className="text-4xl md:text-6xl font-bold text-primary bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}>
            👋 Hi, I'm Clement
          </motion.h1>
          <p className="text-lg text-zinc-700">Cloud & Web Engineer · Fan of beautiful glassy UI, security, and collaborative dev.</p>
          <div className="flex gap-4 mt-2">
            <a href="#projects" className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold rounded-full shadow hover:scale-105 transition">See Projects</a>
            <a href="#contact" className="px-6 py-2 bg-white/40 text-primary font-semibold rounded-full border border-primary hover:bg-primary hover:text-white transition">Contact</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section !pt-0">
        <motion.div className="glass max-w-2xl mx-auto text-center border border-white/20 px-10 py-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.11, duration: 0.74 }}>
          <h2 className="text-3xl font-bold text-purple-500 mb-1">About Me</h2>
          <p className="text-gray-700 text-lg mb-3">Engineer by training, designer at heart. I build digital experiences with a focus on aesthetics, accessibility, and performance.<br /><span className="font-bold text-purple-500">Cloud, Security & Glassmorphism fan.</span></p>
          <div className="flex flex-col gap-1 text-zinc-600 mt-5">
            <span>👨‍🎓 B.Tech IT, PG: Cloud & Cybersecurity, Toronto</span>
            <span>💻 Experience: React/TS, Node, Cloud, LLM/AI, Security</span>
            <span>✨ Loves: UI polish, public demos, fast iteration, teamwork</span>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <motion.h2 className="text-3xl font-bold text-purple-500 mb-10 text-center"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>Skills & Tools</motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {skills.map(({ label, iconLib, iconName, color }) => {
            const IconComponent = iconLib === "fa" ? FaIcons[iconName] : SiIcons[iconName];
            return (
              <div key={label} className="flex flex-col items-center p-5 glass rounded-2xl gap-2 cursor-pointer hover:shadow-lg hover:scale-105 transition">
                {IconComponent ? <IconComponent size={32} color={color} /> : null}
                <span className="font-semibold mt-1 text-zinc-800">{label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <motion.h2 className="text-3xl font-bold text-purple-500 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>Featured Projects</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 max-w-6xl mx-auto">
          {projects.map(({ title, desc, tech, img, gh, live }, i) => (
            <motion.div key={title}
              className="glass rounded-3xl flex flex-col shadow-xl border border-purple-400/15 hover:shadow-purple-200 transition overflow-hidden hover:scale-[1.04]"
              initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}>
              <img src={img} alt={title} className="w-full h-48 object-cover rounded-t-3xl" />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1 text-zinc-800">{title}</h3>
                <p className="text-zinc-600 text-sm mb-2 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-1 mt-1">
                  {tech.map(t => <span className="bg-purple-500/90 text-white px-2 py-1 rounded text-xs" key={t}>{t}</span>)}
                </div>
                <div className="mt-2 flex gap-3">
                  <a href={live} className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium shadow hover:scale-105 transition" target="_blank" rel="noopener">Live</a>
                  <a href={gh} className="px-3 py-1 rounded-lg bg-zinc-900/80 text-white font-medium shadow hover:scale-105 transition" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="glass max-w-lg mx-auto p-10 flex flex-col items-center gap-2 text-center border border-purple-500/15">
          <h2 className="text-2xl text-purple-500 font-bold mb-2">Contact</h2>
          <p className="mb-2 text-zinc-700">Let’s build something modern together!</p>
          <a href="mailto:youremail@example.com" className="text-lg text-primary font-semibold underline mb-2">
            youremail@example.com
          </a>
          <div className="flex gap-4 mt-6 justify-center">
            {socialLinks.map((l, i) => (
              <a key={i} href={l.href} aria-label={l.label} target="_blank" rel="noopener"
                className="p-3 text-2xl rounded-full hover:bg-purple-400/15 transition">{l.icon}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Clement VSC • Built with React, Tailwind & Framer Motion
      </footer>
    </div>
  );
}
