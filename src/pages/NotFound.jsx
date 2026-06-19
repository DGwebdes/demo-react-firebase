import { Link } from "react-router-dom";
import Layout from "./Layout";

export const NotFound = () => {
  return (
    <Layout>
      <div className="h-[75dvh] flex flex-col items-center justify-center gap-4">
        <p className="text-[#00ff41]/20 text-8xl font-bold tracking-widest">
          404
        </p>
        <h1
          className="text-lg tracking-[0.2em] uppercase text-green
          drop-shadow-[0_0_8px_var(--glow-green)]"
        >
          signal lost
        </h1>
        <p className="text-muted text-xs tracking-widest">
          this terminal does not exist
        </p>
        <Link
          to="/"
          className="mt-4 px-6 py-2 text-xs tracking-widest uppercase
            border border-border-neon/30 text-green rounded-sm
            hover:border-green hover:shadow-[0_0_10px_var(--glow-green)]
            transition-all duration-200"
        >
          return to base
        </Link>
      </div>
    </Layout>
  );
};
