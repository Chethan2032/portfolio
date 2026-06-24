"use client";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, PlusIcon } from "./icons";

// ── Edit or add projects here ──────────────────────────────────────────────
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js, TypeScript, Tailwind CSS and Framer Motion. Showcases my skills, projects and journey as a developer.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    emoji: "🌐",
    color: "from-indigo-500/20 to-violet-500/20",
    border: "border-indigo-500/20",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Clothing Brand Website",
    description: "Full website and digital branding for my clothing brand — including product showcases, brand identity, and an engaging online presence.",
    tags: ["HTML", "CSS", "JavaScript", "Branding"],
    emoji: "👕",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "University Programming Projects",
    description: "Collection of programming assignments and software projects completed during my Computer Science degree at Deakin University.",
    tags: ["C", "C++", "Python", "Algorithms"],
    emoji: "🎓",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    github: "https://github.com/",
    live: null,
  },
  // Add more projects below 👇
];
// ─────────────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
            A growing collection of projects — from academic assignments to personal ventures.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass border border-white/8 rounded-3xl overflow-hidden flex flex-col"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.color} flex items-center justify-center border-b ${p.border}`}>
                <span className="text-6xl">{p.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full glass border border-white/8 text-white/50">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-5">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors">
                    <GithubIcon size={14} /> Code
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                      <ExternalLinkIcon size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.1 }}
            className="glass border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 text-center min-h-[280px] group hover:border-indigo-500/30 transition-all"
          >
            <div className="p-3 rounded-full glass border border-white/10 mb-4 group-hover:border-indigo-500/30 transition-all">
              <PlusIcon size={20} className="text-white/30 group-hover:text-indigo-400 transition-colors" />
            </div>
            <p className="text-white/30 text-sm group-hover:text-white/50 transition-colors">More projects coming soon</p>
            <p className="text-white/15 text-xs mt-1">Edit <code className="text-indigo-400/50">Projects.tsx</code> to add</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
