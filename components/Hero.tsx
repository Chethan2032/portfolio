"use client";
import { motion } from "framer-motion";
import { ArrowDownIcon, GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="text-center md:text-left max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-indigo-300 text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Chethan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 mb-3"
            >
              Computer Science Student &amp; Aspiring Software Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/40 text-base mb-8 leading-relaxed"
            >
              Studying at Deakin University, Melbourne · Passionate about AI,
              Data Science &amp; building cool things.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-600/20"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full glass border border-white/10 text-white/80 hover:text-white hover:border-white/20 font-medium transition-all duration-200"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-4 mt-8 justify-center md:justify-start"
            >
              {[
                { Icon: GithubIcon, href: "https://github.com/Chethan2032", label: "GitHub" },
                { Icon: LinkedinIcon, href: "https://linkedin.com/", label: "LinkedIn" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/chethan.2032/", label: "Instagram" },
                { Icon: MailIcon, href: "mailto:gchethan2128@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full glass border border-white/10 text-white/50 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full p-[2px]"
                style={{ background: "linear-gradient(135deg, #818cf8, #a78bfa, #ec4899)" }}>
                <div className="w-full h-full rounded-full bg-[#050508]" />
              </div>
              <div className="absolute inset-[3px] rounded-full overflow-hidden glass flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-violet-900/40 flex flex-col items-center justify-center gap-2">
                  <div className="text-6xl">👨‍💻</div>
                  <p className="text-white/30 text-xs text-center px-4">
                    Add photo to{" "}
                    <code className="text-indigo-400">public/photo.jpg</code>
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass border border-white/10 rounded-2xl px-4 py-2 text-sm"
            >
              🎓 Deakin University
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-4 -left-4 glass border border-white/10 rounded-2xl px-4 py-2 text-sm"
            >
              📍 Melbourne, AU
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownIcon size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
