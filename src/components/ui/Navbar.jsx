import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import ToggleTheme from "../ui/ToggleTheme";
import { LogOut } from "lucide-react";
import { LogIn } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <>
      <Link to="/" className="group flex items-center gap-2">
        <img
          src="/potion.png"
          alt="blog-logo-icon"
          className="w-9 drop-shadow-[0_0_6px_var(--glow-green)] group-hover:drop-shadow-[0_0_12px_var(--accent-green)] transition-all duration-300"
        />
        <span className="text-green text-sm tracking-[0.2em] uppercase hidden sm:block drop-shadow-[0_0_6px_var(--glow-green)]">
          /root
        </span>
      </Link>

      <div className="flex gap-6 items-center">
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
    </>
  );
};

export default Navbar;
