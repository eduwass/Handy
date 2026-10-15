// Fork wordmark: plain system-font "Handy" in place of upstream's bubble logo.
// Wired in by re-exporting from HandyTextLogo.tsx, so every call site picks it up.
const WORDMARK = "Handy"; // brand name, not translated

const ForkTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 300 80"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={WORDMARK}
  >
    <text
      x="0"
      y="60"
      fill="var(--color-text)"
      fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif"
      fontSize="68"
      fontWeight="600"
      letterSpacing="-2"
    >
      {WORDMARK}
    </text>
  </svg>
);

export default ForkTextLogo;
