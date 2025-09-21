import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiMongodb, SiAws, SiGraphql, SiFramer } from "react-icons/si";

const socialLinks = [
  { href: "mailto:your@email.com", icon: <FaEnvelope size={22} />, label: "Email" },
  { href: "https://github.com/Clementvsc", icon: <FaGithub size={22} />, label: "GitHub" },
  { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin size={22} />, label: "LinkedIn" },
];

const skills = [
  { label: "React", icon: <FaReact color="#60DAFB" size={28} /> },
  { label: "TypeScript", icon: <SiTypescript color="#3178c6" size={28} /> },
  { label: "Next.js", icon: <SiNextdotjs color="#000" size={28} /> },
  { label: "Node.js", icon: <FaNodeJs color="#509941" size={28} /> },
  { label: "Python", icon: <FaPython color="#3776ab" size={28} /> },
  { label: "MongoDB", icon: <SiMongodb color="#47A248" size={28} /> },
  { label: "PostgreSQL", icon: <SiPostgresql color="#336791" size={28} /> },
  { label: "AWS", icon: <SiAws color="#ff9900" size={28} /> },
  { label: "Docker", icon: <FaDocker color="#0db7ed" size={28} /> },
  { label: "GraphQL", icon: <SiGraphql color="#e535ab" size={28} /> },
  { label: "TailwindCSS", icon: <SiTailwindcss color="#36B7F0" size={28} /> },
  { label: "Framer Motion", icon: <SiFramer color="#F56CAC" size={28} /> },
];

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution (React, Node, Stripe) with beautiful UI, cart, and authentication.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80",
    gh: "#", live: "#"
  },
  {
    title: "AI Chat Application",
    desc: "Real-time chat app with OpenAI API integration and robust team channels in a minimal shell.",
    tech: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
    gh: "#", live: "#"
  },
  {
    title: "Portfolio Dashboard",
    desc: "Analytics dashboard with D3.js charts, authentication, and live data (React, Express, Redis).",
    tech: ["React", "D3.js", "Express", "Redis"],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    gh: "#", live: "#"
  },
  {
    title: "Cloud Utils SaaS",
    desc: "Serverless utilities platform with AWS Lambda, user auth, and slick billing UI.",
    tech: ["AWS", "Serverless", "TypeScript"],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    gh: "#", live: "#"
  },
  {
    title: "Realtime Notion Clone",
    desc: "WYSIWYG docs app with live multiplayer sync (React, Socket.io, Editor.js).",
    tech: ["React", "Socket.io", "Editor.js"],
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80",
    gh: "#", live: "#"
  },
  {
    title: "Startup Landing",
    desc: "Blazing fast marketing landing with animated blobs, icons, and A/B opt-in analytics.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    img: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&q=80",
    gh: "#", live: "#"
  },
];

const glass = "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl";

export default function App() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 min-h-screen pb-24 text-zinc-900 font-sans overflow-x-hidden">

      {/* Animated Mesh SVG background */}
      <svg className="absolute -z-10 left-0 top-0 w-full h-[820px] pointer-events-none select-none" aria-hidden="true">
        <defs>
          <radialGradient id="g" cx="50%" cy="30%" r="80%" fx="12%" fy="30%">
            <stop stopColor="#60A5FA" offset="0%" />
            <stop stopColor="#A78BFA" offset="100%" />
          </radialGradient>
        </defs>
        <ellipse cx="50%" cy="44%" rx="600" ry="240" fill="url(#g)" opacity=".16">
          <animate attributeName="rx" values="540;680;540" dur="12s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="68%" cy="30%" rx="220" ry="120" fill="#8b5cf659" opacity=".18">
          <animate attributeName="ry" values="110;170;110" dur="8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="22%" cy="65%" rx="180" ry="80" fill="#38bdf866" opacity=".10">
          <animate attributeName="cx" values="22%;32%;22%" dur="14s" repeatCount="indefinite" />
        </ellipse>
      </svg>

      {/* Glass NavBar */}
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-8 py-2 flex gap-7 items-center rounded-2xl glass shadow-lg backdrop-blur-[6px] border border-white/20">
        <span className="font-bold text-primary text-2xl tracking-tighter drop-shadow-glow">CV</span>
        {["About", "Skills", "Projects", "Contact"].map((it) => (
          <a href={`#${it.toLowerCase()}`}
            className="text-zinc-800 hover:text-primary font-medium px-2 py-1 rounded transition"
            key={it}>
            {it}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center" id="home">
        <motion.div className={`mt-36 sm:mt-44 ${glass} px-10 py-14 flex flex-col items-center gap-6 max-w-lg relative z-10`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.12, duration: 0.7 } }}
        >
          {/* Floating blob */}
          <svg className="absolute z-0 -top-14 right-1 blur-xl opacity-50" width="180" height="120" viewBox="0 0 160 100">
            <ellipse cx="80" cy="50" rx="80" ry="40" fill="#8b5cf6" opacity=".2">
              <animate attributeName="rx" values="60;85;60" dur="14s" repeatCount="indefinite"/>
            </ellipse>
          </svg>
          {/* Avatar */}
          <img src="https://ui-avatars.com/api/?name=Clement+VSC&background=60A5FA&color=fff&size=128" alt="Avatar" className="rounded-full border-4 border-accent-pink mb-3 shadow-lg" />
          <motion.h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.24 } }}>
            👋 Hi, I'm Clement<br className="sm:hidden"/> <span className="text-gradient">Creative&nbsp;Developer</span>
          </motion.h1>
          <p className="mt-1 text-zinc-700 text-lg max-w-sm">Building accessible, modern apps with cloud, security, and AI. Fan of beautiful UI, caffeine, and collaborative teamwork.</p>
          <div className="mt-2 flex gap-3 justify-center">
            {socialLinks.map(l => (
              <a href={l.href} key={l.label} target="_blank" rel="noopener" aria-label={l.label}
                className="p-3 rounded-full bg-white/20 border border-white/20 text-primary hover:bg-accent-purple/10 transition">
                {l.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="relative py-16">
        <motion.div className={`mx-auto max-w-2xl ${glass} border border-accent-purple/15 px-8 py-8 text-center`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}>
          <h2 className="text-3xl font-bold text-accent-purple mb-2">👨‍💻 About Me</h2>
          <p className="text-lg text-zinc-700 mb-2">Engineer by training, designer at heart. I create digital experiences with focus on UI quality, rapid iteration, security, and human empathy.</p>
          <ul className="text-md text-zinc-600 mt-5 flex flex-col gap-1">
            <li>• B.Tech Info Tech + PG in Cloud & Cybersecurity</li>
            <li>• Experience: React, Node, Cloud, Security, LLM/AI demos</li>
            <li>• Loves: Glassmorphism ☁️, meshes, modern stack</li>
            <li>• Location: Toronto, Canada & remote 🌎</li>
          </ul>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16">
        <motion.h2 className="text-3xl font-bold text-accent-purple mb-9 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Skills & Tech
        </motion.h2>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7 }}>
          {skills.map(({ label, icon }) => (
            <motion.div key={label}
              className="flex flex-col items-center p-5 glass rounded-2xl transition group hover:shadow-glow gap-2 cursor-pointer"
              whileHover={{ scale: 1.08 }}>
              {icon}
              <span className="font-semibold mt-1 text-zinc-800 group-hover:text-accent-purple transition">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 relative">
        <motion.h2 className="text-3xl font-bold text-accent-purple mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(({ title, desc, tech, img, gh, live }, i) => (
            <motion.div key={title}
              className="relative glass rounded-3xl flex flex-col shadow-lg border border-accent-purple/10 hover:shadow-glow transition overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.11 + i * 0.11 }}
            >
              <img src={img} alt="" className="w-full h-44 object-cover rounded-t-3xl" />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1 text-zinc-800">{title}</h3>
                <p className="text-zinc-600 text-sm mb-2 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-2 mt-2">
                  {tech.map(t => <span className="bg-accent-purple/80 text-white/90 px-2 py-[2px] rounded text-xs" key={t}>{t}</span>)}
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

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="glass max-w-lg mx-auto p-10 flex flex-col items-center gap-3 text-center border border-accent-purple/20">
          <h2 className="text-2xl text-accent-purple font-bold mb-2">Contact</h2>
          <p className="mb-3 text-zinc-700">Ready to collaborate or have questions? Reach me here:</p>
          <a href="mailto:your@email.com" className="text-lg text-primary font-semibold underline">
            your@email.com
          </a>
          <div className="flex gap-4 mt-6 justify-center">
            {socialLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener" className="p-3 text-2xl rounded-full hover:bg-primary/10 transition">{l.icon}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute left-0 right-0 bottom-0 py-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Clement VSC • Crafted with React & Framer Motion
      </footer>
    </div>
  )
}
