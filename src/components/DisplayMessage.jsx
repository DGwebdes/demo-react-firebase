import React, { useRef } from "react";
import { Virtuoso } from "react-virtuoso";
import { MessageRow } from "./MessageRow";
import { MAX_MESSAGES } from "../utils/constants";

export const DisplayMessage = ({ message, atBottom, setAtBottom }) => {
  const virtuosoRef = useRef(null);

  function scrollToBottom() {
    virtuosoRef.current.scrollToIndex({
      index: message.length - 1,
      behavior: "smooth",
    });
  }

  return (
    <div className="h-full flex-1 relative">
      <Virtuoso
        ref={virtuosoRef}
        style={{ height: "100%" }}
        data={message}
        alignToBottom
        followOutput={atBottom ? "auto" : false}
        atBottomStateChange={setAtBottom}
        itemContent={(index, msg) => <MessageRow {...msg} />}
      />
      {!atBottom && (
        <>
          <button
            onClick={scrollToBottom}
            className="absolute bottom-3 left-1/2 -translate-x-1/2
      px-4 py-1.5 text-xs tracking-widest uppercase font-mono
      border border-purple/60 text-purple
      bg-bg/90 backdrop-blur-sm rounded-sm
      shadow-[0_0_12px_var(--glow-purple)]
      hover:shadow-[0_0_20px_var(--accent-purple)]
      hover:border-purple transition-all duration-200 whitespace-nowrap"
          >
            ↓ new messages
          </button>
          <p
            className="absolute bottom-10 left-1/2 -translate-x-1/2
      text-[8px] tracking-widest text-muted whitespace-nowrap font-mono"
          >
            chat is moving fast — some messages may not be shown
          </p>
        </>
      )}
    </div>
  );
};
