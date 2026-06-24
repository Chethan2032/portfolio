"use client";
import { motion } from "framer-motion";
import { GraduationCapIcon, BookOpenIcon, AwardIcon } from "./icons";

const courses = [
  "Introduction to Programming (C)",
  "Data Structures & Algorithms",
  "Database Systems",
  "Web Technologies",
  "Mathematics for Data Science",
  "Artificial Intelligence Fundamentals",
  "Software Engineering Principles",
  "Statistical Analysis",
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border border-white/8 rounded-3xl p-8 glow-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                <GraduationCapIcon size={28} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-indigo-400 uppercase tracking-widest mb-1">Currently Attending</p>
                <h3 className="text-xl font-bold text-white">Deakin University</h3>
                <p className="text-white/50 text-sm">Melbourne, Victoria, Australia</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Degree", value: "Bachelor of Computer Science" },
                { label: "Major", value: "Data Science" },
                { label: "Status", value: "In Progress", green: true },
                { label: "Location", value: "Melbourne, AU" },
              ].map(({ label, value, green }) => (
                <div key={label} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                  <span className="text-white/50 text-sm">{label}</span>
                  {green ? (
                    <span className="text-green-400 text-sm font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {value}
                    </span>
                  ) : (
                    <span className="text-white text-sm font-medium">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass border border-white/8 rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <BookOpenIcon size={18} className="text-violet-400" />
                </div>
                <h4 className="font-semibold text-white">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span key={c} className="text-xs px-3 py-1.5 rounded-full glass border border-white/8 text-white/60">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass border border-white/8 rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/20">
                  <AwardIcon size={18} className="text-pink-400" />
                </div>
                <h4 className="font-semibold text-white">Focus Areas</h4>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Data Science & ML", pct: 85 },
                  { label: "Software Development", pct: 75 },
                  { label: "Web Technologies", pct: 70 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/60">{label}</span>
                      <span className="text-white/40">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
