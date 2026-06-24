"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, LinkedinIcon, GithubIcon, InstagramIcon, SendIcon, MapPinIcon } from "./icons";

const socials = [
  { Icon: MailIcon, label: "Email", value: "gchethan2128@gmail.com", href: "mailto:gchethan2128@gmail.com", color: "text-red-400 border-red-500/20 bg-red-500/10" },
  { Icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/chethan", href: "https://linkedin.com/", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" },
  { Icon: GithubIcon, label: "GitHub", value: "github.com/Chethan2032", href: "https://github.com/Chethan2032", color: "text-white/80 border-white/10 bg-white/5" },
  { Icon: InstagramIcon, label: "Instagram", value: "@chethan.2032", href: "https://www.instagram.com/chethan.2032/", color: "text-pink-400 border-pink-500/20 bg-pink-500/10" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

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
            I&apos;m always open to connecting — opportunities, collaborations, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-white/30 text-sm mb-6">
              <MapPinIcon size={14} />
              Melbourne, Victoria, Australia
            </div>
            {socials.map(({ Icon, label, value, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 glass border rounded-2xl hover:scale-[1.01] transition-all duration-200 ${color}`}>
                <div className={`p-2 rounded-xl border ${color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/30">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass border border-white/8 rounded-3xl p-7 space-y-5"
          >
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">{label}</label>
                <input
                  type={type}
                  required
                  value={form[id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hey Chethan, I'd love to connect..."
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-600/20"
            >
              {sent ? "Message Sent! 🎉" : (<>Send Message <SendIcon size={16} /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
