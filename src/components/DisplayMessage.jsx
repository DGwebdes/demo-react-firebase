import React, { useState, useEffect, useRef } from "react";
import { Virtuoso } from "react-virtuoso";
import { MessageRow } from "./MessageRow";
import { createInitialMessages, createMessage } from "../utils/mockData";

export const DisplayMessage = () => {
  const [messages, setMessages] = useState(() => createInitialMessages(10));
  const [atBottom, setAtBottom] = useState(true);
  const virtuosoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [...prev, createMessage()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function scrollToBottom() {
    virtuosoRef.current.scrollToIndex({
      index: messages.length - 1,
      behavior: "smooth",
    });
  }

  return (
    <div className="h-full flex-1">
      <Virtuoso
        ref={virtuosoRef}
        style={{ height: "100%" }}
        data={messages}
        followOutput={atBottom ? "smooth" : false}
        atBottomStateChange={setAtBottom}
        itemContent={(index, msg) => <MessageRow {...msg} />}
      />
      {!atBottom && (
        <button
          onClick={scrollToBottom}
          style={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#bf94ff",
            color: "#0e0e10",
            border: "none",
            borderRadius: 12,
            padding: "4px 14px",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          ↓ new messages
        </button>
      )}
    </div>
  );
};
