export const LoadingScreen = () => {
  return (
    <div className="min-h-dvh bg-bg flex flex-col items-center justify-center gap-6 font-mono">
      {/* Animated bars */}
      <div className="flex items-end gap-1.5 h-8">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="w-1 bg-green rounded-sm animate-pulse"
            style={{
              height: `${40 + i * 15}%`,
              animationDelay: `${i * 150}ms`,
              boxShadow: "0 0 6px var(--accent-green)",
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <span
            key={i + 5}
            className="w-1 bg-green rounded-sm animate-pulse"
            style={{
              height: `${100 - i * 15}%`,
              animationDelay: `${(i + 5) * 150}ms`,
              boxShadow: "0 0 6px var(--accent-green)",
            }}
          />
        ))}
      </div>

      <p
        className="text-green text-xs tracking-[0.4em] uppercase
        drop-shadow-[0_0_8px_var(--glow-green)]"
      >
        initializing...
      </p>
    </div>
  );
};
