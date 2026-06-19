import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ToggleTheme from "../ui/ToggleTheme";
import { LogOut } from "lucide-react";
import { LogIn } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setMenuOpen(false);
    navigate("/");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Main navbar bar */}
      <Link
        to="/"
        className="group flex items-center gap-2"
        onClick={closeMenu}
      >
        <img
          src="/potion.png"
          alt="blog-logo-icon"
          className="w-9 drop-shadow-[0_0_6px_var(--glow-green)] group-hover:drop-shadow-[0_0_12px_var(--accent-green)] transition-all duration-300"
        />
        <span
          className="text-green text-sm tracking-[0.2em] uppercase hidden sm:block
          drop-shadow-[0_0_6px_var(--glow-green)]"
        >
          /root
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-6 items-center">
        <Link
          to="/chatroom"
          className="text-sm tracking-widest uppercase text-dim
            hover:text-green hover:drop-shadow-[0_0_8px_var(--accent-green)]
            transition-all duration-200 relative
            after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:w-0 after:h-px after:bg-green
            after:hover:w-full after:transition-all after:duration-300"
        >
          chatroom
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="text-sm tracking-widest uppercase text-dim
              hover:text-green hover:drop-shadow-[0_0_8px_var(--accent-green)]
              transition-all duration-200"
          >
            logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-sm tracking-widest uppercase text-dim
              hover:text-green hover:drop-shadow-[0_0_8px_var(--accent-green)]
              transition-all duration-200"
          >
            login
          </Link>
        )}

        <ToggleTheme />
      </div>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden flex flex-col gap-1.5 p-2 group"
        aria-label="toggle menu"
      >
        <span
          className={`block w-6 h-px bg-green transition-all duration-300
          drop-shadow-[0_0_4px_var(--accent-green)]
          ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-green transition-all duration-300
          drop-shadow-[0_0_4px_var(--accent-green)]
          ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-green transition-all duration-300
          drop-shadow-[0_0_4px_var(--accent-green)]
          ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
        />
      </button>

      {/* Full screen overlay */}
      {menuOpen && (
        <div className="md:hidden fixed h-screen inset-0 z-50 bg-bg flex flex-col font-mono">
          {/* Overlay navbar bar */}
          <div
            className="py-4 px-10 flex justify-between items-center
            border-b border-border-neon/20"
          >
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-2"
            >
              <img
                src="/potion.png"
                alt="blog-logo-icon"
                className="w-9 drop-shadow-[0_0_6px_var(--glow-green)]"
              />
              <span
                className="text-green text-sm tracking-[0.2em] uppercase
                drop-shadow-[0_0_6px_var(--glow-green)]"
              >
                /root
              </span>
            </Link>

            {/* Close button — X shape via rotated hamburger lines */}
            <button
              onClick={closeMenu}
              className="flex flex-col gap-1.5 p-2"
              aria-label="close menu"
            >
              <span
                className="block w-6 h-px bg-green rotate-45 translate-y-0.5
                drop-shadow-[0_0_4px_var(--accent-green)]"
              />
              <span
                className="block w-6 h-px bg-green -rotate-45 -translate-y-0.5
                drop-shadow-[0_0_4px_var(--accent-green)]"
              />
            </button>
          </div>

          {/* Overlay links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10">
            <Link
              to="/chatroom"
              onClick={closeMenu}
              className="text-2xl tracking-[0.3em] uppercase text-dim
                hover:text-green hover:drop-shadow-[0_0_12px_var(--accent-green)]
                transition-all duration-200"
            >
              chatroom
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="text-2xl tracking-[0.3em] uppercase text-dim
                  hover:text-green hover:drop-shadow-[0_0_12px_var(--accent-green)]
                  transition-all duration-200"
              >
                logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="text-2xl tracking-[0.3em] uppercase text-dim
                  hover:text-green hover:drop-shadow-[0_0_12px_var(--accent-green)]
                  transition-all duration-200"
              >
                login
              </Link>
            )}

            <div className="flex flex-col items-center gap-3">
              <span className="text-muted text-xs tracking-[0.3em]">theme</span>
              <ToggleTheme />
            </div>
          </div>

          {/* Overlay footer */}
          <div className="py-6 flex justify-center">
            <p className="text-muted text-[10px] tracking-[0.4em]">
              © {new Date().getFullYear()} — all systems operational
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
