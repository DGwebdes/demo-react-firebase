import React from "react";

export const UserInput = () => {
  return (
    <div className="px-3 py-3 flex items-center gap-2">
      <div
        className="flex-1 flex items-center gap-2 px-3 py-2
      border border-border-neon/30 rounded-sm
      bg-surface text-dim text-xs tracking-widest
      font-mono opacity-40"
      >
        <span className="text-green animate-pulse">▋</span>
        <span>awaiting input...</span>
      </div>
    </div>
  );
};
