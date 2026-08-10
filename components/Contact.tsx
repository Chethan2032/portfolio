"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, LinkedinIcon, GithubIcon, InstagramIcon, SendIcon, MapPinIcon } from "./icons";

// ── Paste your Formspree endpoint here ─────────────────────────────────────
// Get it free at https://formspree.io → New Form → copy the endpoint URL
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdenejeo";

// ── Paste your real LinkedIn profile URL here ──────────────────────────────
const LINKEDIN_URL = "https://linkedin.com/";
const LINKEDIN_HANDLE = "linkedin.com/in/chethan";
// ───────────────────────────────────────────────────────────────────────────

const socials = [
  {
    Icon: MailIcon,
    label: "Email",
    value: "gchethan2128@gmail.com",
    href: "mailto:gchethan2128@gmail.com",
    accent: "text-red-400",
    ring: "border-red-500/20 bg-red-500/10",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: LINKEDIN_HANDLE,
    href: LINKEDIN_URL,
    accent: "text-blue-400",
    ring: "border-blue-500/20 bg-blue-500/10",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Chethan2032",
    href: "https://github.com/Chethan2032",
    accent: "text-white/80",
    ring: "border-white/10 bg-white/5",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    value: "@chethan.2032",
    href: "https://www.instagram.com/chethan.2032/",
    accent: "text-pink-400",
    ring: "border-pink-500/20 bg-pink-500/10",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.errors?.[0]?.message ?? "Something went wrong. Please email me directly.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please email me directly.");
      setStatus("error");
    }
  };

  const disabled = status === "sending";

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm">
            Open to freelance work, collaborations, and new opportunities. Drop me a message and
            I&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 text-white/30 text-sm mb-6">
              <MapPinIcon size={14} />
              Melbourne, Victoria, Australia
            </div>

            {socials.map(({ Icon, label, value, href, accent, ring }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass border border-white/8 rounded-2xl hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group"
              >
                <div className={`p-2.5 rounded-xl border ${ring} ${accent}`}>
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/30 uppercase tracking-widest">{label}</p>
                  <p className="text-sm text-white font-medium truncate group-hover:text-white transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass border border-white/8 rounded-3xl p-7 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs text-white/40 mb-2 uppercase tracking-widest">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={disabled}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-white/40 mb-2 uppercase tracking-widest">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={disabled}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-white/40 mb-2 uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                disabled={disabled}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hey Chethan, I'd love to connect..."
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={disabled}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-600/20"
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message sent ✓"}
              {(status === "idle" || status === "error") && (
                <>
                  Send Message <SendIcon size={16} />
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="text-xs text-green-400 text-center">
                Thanks! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400 text-center">{error}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
