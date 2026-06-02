import React from "react";

export const MessageRow = ({ ...msg }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        padding: "6px 12px",
        alignItems: "flex-start",
      }}
    >
      {/* Avatar: colored circle with first letter */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: msg.color,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 700,
          color: "#0e0e10",
        }}
      >
        {msg.avatar}
      </div>

      {/* Message body */}
      <div style={{ flex: 1, lineHeight: 1.5 }}>
        <span
          style={{
            color: msg.color,
            fontWeight: 700,
            marginRight: 6,
            fontSize: 13,
          }}
        >
          {msg.user}
        </span>
        <span style={{ color: "#adadb8", fontSize: 11, marginRight: 8 }}>
          {msg.timestamp}
        </span>
        <br />
        <span style={{ color: "#efeff1", fontSize: 13 }}>{msg.text}</span>
      </div>
    </div>
  );
};
