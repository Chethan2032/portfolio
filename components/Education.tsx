"use client";
import { motion } from "framer-motion";
import { GraduationCapIcon, BookOpenIcon } from "./icons";

const deakinCourses = [
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

        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Narayana */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border border-white/8 rounded-3xl p-7 flex items-start gap-5"
          >
            <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 shrink-0">
              <GraduationCapIcon size={24} className="text-orange-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-white">Narayana IIT Coaching</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                  Completed
                </span>
              </div>
              <p className="text-indigo-300 text-sm font-medium mb-1">12th Grade — Science</p>
              <p className="text-white/40 text-sm">India</p>
            </div>
          </motion.div>

          {/* Deakin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass border border-indigo-500/20 rounded-3xl p-7"
          >
            <div className="flex items-start gap-5 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 shrink-0">
                <GraduationCapIcon size={24} className="text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">Deakin University</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    In Progress
                  </span>
                </div>
                <p className="text-indigo-300 text-sm font-medium mb-1">Bachelor of Computer Science — Major: Data Science</p>
                <p className="text-white/40 text-sm">Melbourne, Victoria, Australia</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <BookOpenIcon size={16} className="text-violet-400" />
              </div>
              <h4 className="text-sm font-medium text-white/70">Relevant Coursework</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {deakinCourses.map((c) => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full glass border border-white/8 text-white/50">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
