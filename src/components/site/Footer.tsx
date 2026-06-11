import { Link } from "@tanstack/react-router";
import { Code2, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 text-slate-300" style={{ background: "var(--gradient-dark)" }}>
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant">
              <Code2 className="size-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg">Coderise Technologies</div>
              <div className="text-xs text-slate-400">Master Programming. Build Your Future.</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-400 max-w-md">
            Premium software training institute helping students become industry-ready developers
            through real-world projects, expert mentorship and placement guidance.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 text-primary-glow" /><a href="tel:9390933435" className="hover:text-white">+91 93909 33435</a></li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 text-primary-glow" /><a href="mailto:hello@coderise.tech" className="hover:text-white">hello@coderise.tech</a></li>
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-primary-glow" /><span>Adithya Enclave, 1st Floor,<br/>ZP Road, Hastinapuram</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-slate-400 text-center">
          © 2025 Coderise Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
