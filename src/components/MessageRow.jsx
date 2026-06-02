import React from "react";

export const MessageRow = ({ color, avatar, user, timestamp, text }) => {
  return (
    <div className="flex gap-3 px-3 py-2 items-start hover:bg-green/5 transition-colors duration-150 group">
      <div
        className="w-7 h-7 rounded-sm shrink-0 flex items-center justify-center text-xs font-bold text-bg font-mono"
        style={{ background: color, boxShadow: `0 0 8px ${color}66` }}
      >
        {avatar}
      </div>

      <div className="flex-1 leading-relaxed min-w-0">
        <span
          className="font-bold text-xs mr-2 font-mono"
          style={{ color, textShadow: `0 0 8px ${color}99` }}
        >
          {user}
        </span>
        <span className="text-muted text-[10px] mr-2 font-mono">
          {timestamp}
        </span>
        <br />
        <span className="text-dim text-xs font-mono wrap-break-word">
          {text}
        </span>
      </div>
    </div>
  );
};
