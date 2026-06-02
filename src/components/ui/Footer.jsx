import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Link to="/" className="group flex items-center gap-2">
        <img
          src="/potion.png"
          alt="blog-logo-icon"
          className="w-8 opacity-60 group-hover:opacity-100
            drop-shadow-[0_0_6px_var(--glow-green)]
            group-hover:drop-shadow-[0_0_10px_var(--accent-green)]
            transition-all duration-300"
        />
      </Link>

      <p className="text-muted text-xs tracking-[0.3em]">
        © {new Date().getFullYear()} — all systems operational
      </p>

      <div className="flex items-center gap-1.5 text-purple text-xs tracking-widest opacity-60">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
        <span>online</span>
      </div>
    </>
  );
};

export default Footer;
