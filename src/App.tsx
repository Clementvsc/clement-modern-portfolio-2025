import React from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// Animated gradient mesh components
const GradientMesh = ({ className = "", id }: { className?: string; id: string }) => (
  <svg
    className={`absolute inset-0 -z-10 h-full w-full ${className}`}
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <defs>
      <radialGradient id={`${id}-g1`} cx="20%" cy="10%" r="60%">
        <stop offset="0%" stopColor="#60DAFB" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#60DAFB" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${id}-g2`} cx="80%" cy="20%" r="60%">
        <stop offset="0%" stopColor="#F56CAC" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#F56CAC" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${id}-g3`} cx="50%" cy="90%" r="70%">
        <stop offset="0%" stopColor="#36B7F0" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#36B7F0" stopOpacity="0" />
      </radialGradient>
    </defs>

    <motion.circle cx="150" cy="120" r="240" fill={`url(#${id}-g1)`} animate={{ cx: [130, 170, 150], cy: [110, 140, 120] }} transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
    <motion.circle cx="650" cy="160" r="260" fill={`url(#${id}-g2)`} animate={{ cx: [630, 680, 650], cy: [180, 140, 160] }} transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
    <motion.circle cx="400" cy="520" r="300" fill={`url(#${id}-g3)`} animate={{ cx: [420, 380, 400], cy: [540, 500, 520] }} transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }} />
  </svg>
);

// Data
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
] as const;

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
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    gh: "#",
    live: "#",
  },
  {
    title: "Chat App",
    desc: "Realtime chat with websockets, groups, and file sharing.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80",
    gh: "#",
    live: "#",
  },
];

// Helpers
const iconFromSkill = (s: (typeof skills)[number]) => {
  const lib = s.iconLib === "fa" ? FaIcons : SiIcons;
  // @ts-ignore
  const Comp = lib[s.iconName] as React.ComponentType<{ color?: string; className?: string }>;
  return <Comp className="text-3xl" color={s.color} />;
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardHover = "transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 hover:-translate-y-1 hover:scale-[1.02]";
const glowRing = "before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-cyan-400/30 before:via-fuchsia-400/30 before:to-sky-400/30 before:blur-xl before:-z-10";

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Hero */}
      <section className="relative isolate">
        <GradientMesh id="hero" className="opacity-60" />
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="flex flex-col items-center text-center gap-6">
            <div className="relative">
              <div className={`mx-auto h-36 w-36 rounded-full ring-2 ring-white/10 shadow-2xl shadow-cyan-500/10 overflow-hidden ${glowRing}`}>
                <img src="https://avatars.githubusercontent.com/u/13204265?v=4" alt="Avatar" className="h-full w-full object-cover" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Clément – Modern Web Engineer</h1>
            <p className="max-w-2xl text-slate-300">I build fast, delightful web apps with TypeScript, React, Next.js, and cloud-native backends.</p>
            <div className="flex gap-3">
              <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 shadow-xl shadow-cyan-500/30 transition-all hover:shadow-2xl hover:shadow-cyan-400/50">
                <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">View Projects</span>
                <motion.span className="relative" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.6, repeat: Infinity }}>
                  <FaIcons.FaArrowRight />
                </motion.span>
              </a>
              <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white/90 backdrop-blur-md bg-white/5 shadow-xl hover:bg-white/10 transition-all">
                <span className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Contact</span>
                <motion.span className="relative" animate={{ scale: [1, 1.07, 1] }} transition={{ duration: 1.8, repeat: Infinity }}>
                  <FaIcons.FaPaperPlane />
                </motion.span>
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((s) => (
                <a key={s.label} aria-label={s.label} href={s.href} className="text-xl text-white/80 hover:text-white transition-transform hover:-translate-y-0.5">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="text-2xl md:text-3xl font-semibold mb-8">Skills</motion.h2>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((s) => (
              <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 ${cardHover}`}>
                <div className="flex items-center gap-3">
                  {iconFromSkill(s)}
                  <span className="font-medium" style={{ color: s.color }}>{s.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="text-2xl md:text-3xl font-semibold mb-8">Projects</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.article key={p.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${cardHover}`}>
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt="project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-white/70">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a href={p.gh} className="text-cyan-300 hover:text-cyan-200">Code</a>
                    <a href={p.live} className="text-cyan-300 hover:text-cyan-200">Live</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-white/10 bg-slate-950/60">
        <GradientMesh id="footer" className="opacity-40" />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="text-center text-white/60">
            © {new Date().getFullYear()} Clément. Built with Next.js, React, and ❤️
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
