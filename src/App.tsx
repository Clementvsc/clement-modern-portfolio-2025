import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// --- SKILLS DATA ---
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

// --- SOCIALS ---
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
    gh: "https://github.com/Clementvsc/demo-ecommerce", live: "#"
  },
  {
    title: "Realtime Chat App",
    desc: "Group chat with OpenAI bot and socket channels, minimal shell.",
    tech: ["Next.js", "OpenAI", "Socket.io"],
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=450&q=80",
    gh: "https://github.com/Clementvsc/demo-chat", live: "#"
  },
  // ...Add additional projects here...
];

export default function App() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 min-h-screen text-zinc-900 font-sans">
      {/* NAV */}
      <nav className="fixed top-3 left-1/2 z-50 -translate-x-1/2 px-8 py-2 flex gap-8 items-center rounded-2xl glass shadow-lg backdrop-blur-[6px] border border-white/20">
        <span className="font-bold text-primary text-2xl tracking-tight drop-shadow-glow">CV</span>
        {["About", "Skills", "Projects", "Contact"].map((it) => (
          <a href={`#${it.toLowerCase()}`} className="text-zinc-800 hover:text-primary font-medium px-2 py-1 rounded transition" key={it}>{it}</a>
        ))}
      </nav>

      {/* HERO */}
      <section className="min-h-[95vh] flex flex-col items-center justify-center text-center" id="home">
        <motion.div className="mt-36 sm:mt-44 px-10 py-14 glass flex flex-col items-center gap-6 max-w-lg relative z-10"
          initial={{ y: 42, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.18, duration: 0.9 } }}>
          <img src="https://ui-avatars.com/api/?name=Clement+VSC&background=60A5FA&color=fff&size=160" alt="Avatar" className="rounded-full border-8 border-accent-pink mb-4 shadow-xl" width={100} height={100} />
          <motion.h1 className="text-5xl font-extrabold text-primary tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0, transition: { delay: .24 } }}>
            👋 Hi, I'm Clement<br className="md:hidden" />{" "}<span className="text-gradient">Modern&nbsp;Web&nbsp;Dev</span>
          </motion.h1>
          <p className="mt-3 text-zinc-700 text-lg">Building beautiful, useful, and secure products. Fan of glassmorphism, creative coding, ML, and rapid prototyping. <span className="font-bold text-accent-purple">Toronto, Canada 🇨🇦</span></p>
          <div className="flex gap-3 mt-3">
            <a href="#projects" className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white font-medium shadow hover:scale-105 transition">See Projects</a>
            <a href="#contact" className="px-6 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition">Contact</a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <motion.div className="glass mx-auto max-w-xl px-8 py-10 text-center shadow-xl border border-purple-400/15"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl font-bold text-purple-500 mb-2">👨‍💻 About Me</h2>
          <p className="text-lg text-zinc-700 mb-3">Engineer by training, designer at heart. I build digital experiences with a focus on aesthetics, accessibility, and performance. <b>Cloud, security, LLMs, and glassmorphism</b> are my interests.</p>
          <ul className="text-md text-zinc-600 mt-6 flex flex-col gap-2">
            <li>• B.Tech Info Tech, PG Cloud & Cybersecurity</li>
            <li>• Experience: React, Node, Cloud, LLM/AI, Security</li>
            <li>• Loves: Modern interfaces ☁️ & AI projects 🤖</li>
          </ul>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16">
        <motion.h2 className="text-3xl font-bold text-purple-500 mb-10 text-center"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>Skills & Tools</motion.h2>
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

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <motion.h2 className="text-3xl font-bold text-purple-500 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(({ title, desc, tech, img, gh, live }, i) => (
            <motion.div key={title}
              className="relative glass rounded-3xl flex flex-col shadow-xl border border-purple-400/10 hover:shadow-glow transition overflow-hidden"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.11 + i * 0.11 }}
            >
              <img src={img} alt={title} className="w-full h-44 object-cover rounded-t-3xl" />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1 text-zinc-800">{title}</h3>
                <p className="text-zinc-600 text-sm mb-2 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-2 mt-2">
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
      <section id="contact" className="py-24">
        <div className="glass max-w-lg mx-auto p-10 flex flex-col items-center gap-2 text-center border border-purple-500/15">
          <h2 className="text-2xl text-purple-500 font-bold mb-2">Contact</h2>
          <p className="mb-2 text-zinc-700">Let's build something modern together:</p>
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
