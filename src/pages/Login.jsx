// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/useAuth";
import Layout from "./Layout";

const Login = () => {
  // const navigate = useNavigate();
  // const { GoogleSignIn } = useAuth();
  // const [error, setError] = useState("");

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await GoogleSignIn();
  //     navigate("/");
  //   } catch (err) {
  //     setError("Cannot login with google", err.message);
  //   }
  // };

  return (
    <Layout>
      <div className="h-[75dvh] flex items-center justify-center">
        <div
          className="w-full max-w-sm p-8 rounded-sm
        border border-border-neon/30
        bg-surface
        shadow-[0_0_30px_var(--glow-green)]"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <p className="text-muted text-xs tracking-[0.4em] mb-1">
              — access terminal —
            </p>
            <h1
              className="text-xl tracking-[0.2em] uppercase text-green
            drop-shadow-[0_0_8px_var(--glow-green)]"
            >
              authenticate
            </h1>
          </div>

          {/* Error */}
          {/* {error && (
            <div
              className="mb-4 px-3 py-2 border border-red-500/50 rounded-sm
            text-red-400 text-xs tracking-wider text-center
            bg-red-500/10"
            >
              ⚠ {error}
            </div>
          )} */}

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 border-b border-border-neon/20" />
            <span className="text-muted text-xs tracking-widest">via</span>
            <div className="flex-1 border-b border-border-neon/20" />
          </div>

          {/* Google button */}
          <button
            // onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3
            px-6 py-3 rounded-sm
            border border-border-neon/30
            bg-transparent text-primary text-sm tracking-widest uppercase
            hover:border-green hover:text-green
            hover:shadow-[0_0_16px_var(--glow-green)]
            transition-all duration-300"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            sign in with google
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
