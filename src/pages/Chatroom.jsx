import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { DisplayMessage } from "../components/DisplayMessage";
import { UserInput } from "../components/UserInput";
import { createInitialMessages } from "../utils/mockData";

function Posts() {
  const [atBottom, setAtBottom] = useState(true);
  const [message, setMessage] = useState(() => createInitialMessages(100));

  return (
    <Layout>
      <div className="flex flex-col h-[85dvh]">
        <h1
          className="text-lg tracking-[0.2em] uppercase mb-3
        text-green drop-shadow-[0_0_8px_var(--glow-green)]"
        >
          // the yapping
        </h1>

        <div
          className="flex flex-1 min-h-0 border border-border-neon/20 rounded-sm
        shadow-[0_0_20px_var(--glow-green)]"
        >
          {/* Sidebar — empty for now */}
          <aside className="w-48 border-r border-border-neon/20 hidden md:block" />

          {/* Chat */}
          <section className="flex-1 flex flex-col min-h-0">
            <DisplayMessage
              message={message}
              setMessage={setMessage}
              atBottom={atBottom}
              setAtBottom={setAtBottom}
            />
            <div className="border-t border-border-neon/20">
              <UserInput setMessage={setMessage} />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Posts;
