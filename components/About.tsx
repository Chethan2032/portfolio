"use client";
import { motion } from "framer-motion";
import { MapPinIcon, GraduationCapIcon, Code2Icon } from "./icons";

const stats = [
  { label: "Age", value: "19" },
  { label: "Location", value: "Melbourne" },
  { label: "Degree", value: "B.CompSci" },
  { label: "Major", value: "Data Science" },
];

const interests = [
  "💻 Programming",
  "🤖 Artificial Intelligence",
  "📊 Data Science",
  "🌐 Web Development",
  "🚀 Entrepreneurship",
  "🎯 Problem Solving",
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 text-white/60 leading-relaxed text-[15px]">
              <p>
                Hey! I&apos;m <strong className="text-white">Chethan</strong>, a 19-year-old Computer Science student originally from{" "}
                <strong className="text-indigo-400">India</strong>, now living and studying in the vibrant city of{" "}
                <strong className="text-indigo-400">Melbourne, Australia</strong>.
              </p>
              <p>
                Moving to Australia was a defining moment — it opened doors to world-class education and a diverse tech community. I&apos;m currently pursuing a{" "}
                <strong className="text-white">Bachelor of Computer Science at Deakin University</strong>, majoring in{" "}
                <strong className="text-white">Data Science</strong>.
              </p>
              <p>
                I&apos;m deeply passionate about the intersection of technology and innovation — from writing clean code in C and Python, to exploring machine learning and building web experiences. Beyond tech, I&apos;m also building a personal brand and working on entrepreneurial projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span key={i} className="text-sm px-3 py-1.5 rounded-full glass border border-white/8 text-white/70">
                  {i}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass border border-white/8 rounded-2xl p-5">
                  <p className="text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="text-white/40 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {[
              { Icon: MapPinIcon, title: "Location", desc: "Melbourne, Victoria, Australia" },
              { Icon: GraduationCapIcon, title: "Education", desc: "Deakin University — B.CompSci, Data Science" },
              { Icon: Code2Icon, title: "Focus", desc: "AI · Data Science · Web Development" },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="glass border border-white/8 rounded-2xl p-4 flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="text-xs text-white/40">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
