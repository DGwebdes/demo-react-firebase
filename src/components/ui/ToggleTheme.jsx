import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-sm border border-border-neon/30 bg-transparent
        hover:border-border-neon/80 hover:shadow-[0_0_10px_var(--glow-green)]
        transition-all duration-300 group"
    >
      {theme === "dark" ? (
        <Sun
          size={16}
          className="text-[#ffd700] drop-shadow-[0_0_4px_rgba(255,215,0,0.6)]
          group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] transition-all duration-300"
        />
      ) : (
        <Moon
          size={16}
          className="text-purple drop-shadow-[0_0_4px_var(--glow-purple)]
          group-hover:drop-shadow-[0_0_8px_var(--accent-purple)] transition-all duration-300"
        />
      )}
    </button>
  );
};

export default ToggleTheme;
