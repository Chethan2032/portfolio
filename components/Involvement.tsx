"use client";
import { motion } from "framer-motion";

const items = [
  {
    icon: "🎓",
    title: "Computer Science Student",
    desc: "Actively studying CS at Deakin University, attending lectures, completing assignments, and building academic foundations.",
    color: "from-indigo-500/15 to-indigo-600/5",
    border: "border-indigo-500/20",
  },
  {
    icon: "💻",
    title: "Learning Programming",
    desc: "Continuously improving my skills in C, C++, Python, and web technologies through coursework and self-study.",
    color: "from-blue-500/15 to-blue-600/5",
    border: "border-blue-500/20",
  },
  {
    icon: "🏷️",
    title: "Building Personal Brand",
    desc: "Working on my clothing brand and online presence — combining creativity and business thinking.",
    color: "from-pink-500/15 to-pink-600/5",
    border: "border-pink-500/20",
  },
  {
    icon: "⚙️",
    title: "Working on Technology Projects",
    desc: "Building real-world projects that solve problems and sharpen my engineering skills.",
    color: "from-violet-500/15 to-violet-600/5",
    border: "border-violet-500/20",
  },
  {
    icon: "🤖",
    title: "Exploring AI & Data Science",
    desc: "Studying machine learning concepts, data analysis pipelines and AI applications as part of my major.",
    color: "from-emerald-500/15 to-emerald-600/5",
    border: "border-emerald-500/20",
  },
];

export default function Involvement() {
  return (
    <section id="involvement" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">
            Current
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I&apos;m <span className="gradient-text">Doing Now</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${item.color} border ${item.border} glass`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
