import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col justify-between bg-bg text-primary font-mono transition-colors duration-300 md:px-30">
      <nav
        className="py-4 px-10 flex justify-between items-center sticky top-0 z-50
        border-b border-border-neon/20 bg-bg/90 backdrop-blur-sm
        shadow-[0_1px_20px_var(--glow-green)]"
      >
        <Navbar />
      </nav>

      <main className="px-10 py-4 flex-1">{children}</main>

      <footer
        className="py-4 px-10 flex justify-between items-center
        border-t border-border-neon/20 bg-bg/90 backdrop-blur-sm
        shadow-[0_-1px_20px_var(--glow-green)]"
      >
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
