import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { DisplayMessage } from "../components/DisplayMessage";
import { UserInput } from "../components/UserInput";
import { useChat } from "../hooks/useChat";
import { useAuth } from "../hooks/useAuth";

function Chatroom() {
  const { profile } = useAuth();
  const { messages, sendMessage } = useChat(profile);
  const [atBottom, setAtBottom] = useState(true);

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
              message={messages}
              atBottom={atBottom}
              setAtBottom={setAtBottom}
            />
            <div className="border-t border-border-neon/20">
              <UserInput sendMessage={sendMessage} />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Chatroom;
