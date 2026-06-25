"use client";
import { motion } from "framer-motion";

const highlights = [
  { label: "Age", value: "19", icon: "🎂" },
  { label: "University", value: "Deakin University", icon: "🎓" },
  { label: "Role", value: "Student, Freelancer & Developer", icon: "💼" },
  { label: "Location", value: "Melbourne, Australia", icon: "📍" },
  { label: "Interests", value: "Coding, Marketing, Sales, AI, Business", icon: "🚀" },
  { label: "Goal", value: "Software Developer & Entrepreneur", icon: "🎯" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 text-white/60 leading-relaxed text-[15px]">
              <p>
                I&apos;m <strong className="text-white">Chethan</strong>, a 19-year-old Computer Science student at{" "}
                <strong className="text-indigo-400">Deakin University, Melbourne</strong>. I originally moved from India to Australia to build my future in technology, business, and entrepreneurship.
              </p>
              <p>
                I&apos;m interested in a lot of things — freelancing, web development, marketing, sales, AI, and building real-world projects. Right now I&apos;m focused on improving my coding and developer skills while also working on my own business ideas on the side.
              </p>
              <p>
                My goal is to grow as a software developer, freelancer, and entrepreneur. I believe in learning by doing — so I&apos;m always working on something, whether it&apos;s a new project, a skill, or an idea I want to test.
              </p>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-3"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass border border-white/8 rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <span className="text-xl">{h.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs text-white/30 uppercase tracking-widest">{h.label}</p>
                  <p className="text-sm text-white font-medium truncate">{h.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
