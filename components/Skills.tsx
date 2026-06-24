"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "C Programming", icon: "⚙️", level: 75, color: "from-blue-500 to-blue-700" },
  { name: "C++", icon: "🔷", level: 65, color: "from-sky-500 to-sky-700" },
  { name: "Python", icon: "🐍", level: 80, color: "from-yellow-500 to-yellow-700" },
  { name: "HTML", icon: "🌐", level: 85, color: "from-orange-500 to-orange-700" },
  { name: "CSS", icon: "🎨", level: 80, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", icon: "⚡", level: 70, color: "from-yellow-400 to-yellow-600" },
  { name: "Data Science", icon: "📊", level: 72, color: "from-violet-500 to-violet-700" },
  { name: "Git & GitHub", icon: "🔗", level: 75, color: "from-gray-400 to-gray-600" },
  { name: "Problem Solving", icon: "🧠", level: 88, color: "from-pink-500 to-pink-700" },
];

const tools = ["VS Code", "GitHub", "Jupyter Notebook", "Linux", "Terminal", "Figma"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass border border-white/8 rounded-2xl p-5 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-white text-sm">{skill.name}</p>
                  <p className="text-xs text-white/30">{skill.level}% proficiency</p>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/30 text-sm mb-4 uppercase tracking-widest">
            Tools &amp; Environments
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full glass border border-white/8 text-sm text-white/60 hover:text-white hover:border-indigo-500/30 transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
