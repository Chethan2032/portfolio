"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2005",
    icon: "🇮🇳",
    title: "Born in India",
    desc: "Started life in India, growing up with a curiosity for technology and how things work.",
    color: "border-orange-500/40 bg-orange-500/10",
  },
  {
    year: "2024",
    icon: "✈️",
    title: "Moved to Australia",
    desc: "Made the bold move to Melbourne, Australia — a new chapter full of opportunities and adventures.",
    color: "border-blue-500/40 bg-blue-500/10",
  },
  {
    year: "2024",
    icon: "🎓",
    title: "Started Bachelor of Computer Science",
    desc: "Enrolled at Deakin University, Melbourne, pursuing a B.CompSci with a major in Data Science.",
    color: "border-indigo-500/40 bg-indigo-500/10",
  },
  {
    year: "2024–25",
    icon: "💻",
    title: "Learning Software Development",
    desc: "Diving deep into C, C++, Python, web technologies and software engineering principles.",
    color: "border-violet-500/40 bg-violet-500/10",
  },
  {
    year: "2025",
    icon: "🚀",
    title: "Building Personal Projects",
    desc: "Started working on real-world projects — portfolio website, clothing brand, and more.",
    color: "border-pink-500/40 bg-pink-500/10",
  },
  {
    year: "Future",
    icon: "🌟",
    title: "Future Goals",
    desc: "Aiming to become a software engineer or data scientist, and build impactful tech products.",
    color: "border-emerald-500/40 bg-emerald-500/10",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">
            My Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-4 md:gap-8`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    i % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:text-left md:pl-8"
                  }`}
                >
                  <div
                    className={`glass border rounded-2xl p-5 inline-block text-left ${item.color}`}
                  >
                    <p className="text-xs text-white/40 mb-1">{item.year}</p>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-indigo-500 bg-[#050508] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                </div>

                {/* Empty side for alternating */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
