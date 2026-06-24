"use client";
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold gradient-text text-lg">Chethan</p>
          <p className="text-white/30 text-xs mt-0.5">Computer Science Student · Melbourne, AU</p>
        </div>

        <p className="text-white/20 text-xs">© {year} Chethan. All rights reserved.</p>

        <div className="flex gap-3">
          {[
            { Icon: GithubIcon, href: "https://github.com/Chethan2032", label: "GitHub" },
            { Icon: LinkedinIcon, href: "https://linkedin.com/", label: "LinkedIn" },
            { Icon: InstagramIcon, href: "https://www.instagram.com/chethan.2032/", label: "Instagram" },
            { Icon: MailIcon, href: "mailto:gchethan2128@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="p-2 rounded-full glass border border-white/8 text-white/40 hover:text-white hover:border-indigo-500/30 transition-all">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
