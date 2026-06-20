import React from "react";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="h-[75dvh] md:h-[80dvh] flex justify-center items-center flex-col gap-3">
        <h1
          className="text-2xl font-bold tracking-[0.15em] uppercase text-green
          drop-shadow-[0_0_10px_var(--glow-green)]"
        >
          Yapp
        </h1>
        <p className="text-muted text-xs tracking-[0.3em]">
          — initializing stream —
        </p>
      </div>
    </Layout>
  );
};

export default Home;
