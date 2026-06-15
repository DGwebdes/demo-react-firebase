import React, { useState } from "react";
import { MAX_CHARS, MAX_MESSAGES } from "../utils/constants";

export const UserInput = ({ sendMessage }) => {
  const [text, setText] = useState("");

  const charsLeft = MAX_CHARS - text.length;
  const isOverLimit = charsLeft < 0;
  const isEmpty = text.trim().length === 0;

  async function handleSend() {
    if (isEmpty || isOverLimit) return;

    await sendMessage(text);

    setText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.keyShift) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="px-3 py-3 flex flex-col gap-1.5 font-mono">
      <div className="flex items-center gap-2">
        {/* Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={MAX_CHARS + 10}
          className="flex-1 px-3 py-2 rounded-sm text-xs tracking-wide
            bg-surface border border-border-neon/30
            text-primary placeholder:text-muted
            focus:outline-none focus:border-green
            focus:shadow-[0_0_10px_var(--glow-green)]
            transition-all duration-200"
        />

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={isEmpty || isOverLimit}
          className="px-4 py-2 rounded-sm text-xs tracking-widest uppercase
            border border-border-neon/30 text-green
            hover:border-green hover:shadow-[0_0_10px_var(--glow-green)]
            disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none
            transition-all duration-200"
        >
          send
        </button>
      </div>

      {/* Character counter — only shows when getting close */}
      {charsLeft <= 50 && (
        <p
          className={`text-[10px] text-right tracking-widest pr-1 transition-colors duration-200
          ${isOverLimit ? "text-red-400" : "text-muted"}`}
        >
          {charsLeft} chars remaining
        </p>
      )}
    </div>
  );
};
