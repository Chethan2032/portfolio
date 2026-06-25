"use client";
import { motion } from "framer-motion";
import { GithubIcon } from "./icons";

// ── Edit or add projects here ──────────────────────────────────────────────
const projects = [
  {
    title: "Freelancing",
    description: "Working on freelance projects in web development and technology. Helping clients build their online presence and solve real problems. More details coming soon.",
    tags: ["Web Development", "Client Work", "HTML/CSS", "JavaScript"],
    emoji: "💼",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    github: null,
    live: null,
    badge: "Coming Soon",
  },
  {
    title: "ARITKX",
    description: "My clothing brand — built around a bold identity and creative vision. Currently in development. Website and full brand experience launching soon.",
    tags: ["Branding", "Fashion", "Entrepreneurship", "Business"],
    emoji: "👕",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
    github: null,
    live: null,
    badge: "Coming Soon",
  },
  {
    title: "University Projects",
    description: "Programming and Computer Science projects completed as part of my Bachelor of Computer Science degree at Deakin University — covering algorithms, data structures, databases, and more.",
    tags: ["C", "C++", "Python", "Algorithms", "Databases"],
    emoji: "🎓",
    color: "from-indigo-500/20 to-violet-500/20",
    border: "border-indigo-500/20",
    github: "https://github.com/Chethan2032",
    live: null,
    badge: null,
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
            What I&apos;m <span className="gradient-text">Building</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
            A mix of freelance work, personal ventures, and academic projects — all part of the journey.
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
                {p.badge && (
                  <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 font-medium">
                    {p.badge}
                  </span>
                )}
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

                {p.github && (
                  <div className="flex gap-3 mt-5">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors">
                      <GithubIcon size={14} /> View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
