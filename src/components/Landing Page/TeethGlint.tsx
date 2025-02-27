import { FC } from "react";
import { useState, useEffect } from "react";
interface TeethGlintProps {
  show: boolean;
  theme: string;
}

export const TeethGlint: FC<TeethGlintProps> = ({ show, theme }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (!show) {
      setVisible(false);
      return;
    }

    // Show glint for a fixed duration to prevent it from getting stuck
    setVisible(true);
    const timeout = setTimeout(() => setVisible(false), 400);

    return () => clearTimeout(timeout);
  }, [show, theme]); // Reset when `show` or `theme` changes

  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <svg
        width="70%"
        height="70%"
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          top: "73%",
          left: "56%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <defs>
          <radialGradient
            id="glintGradient1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="glintGradient2"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="60%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* First Glint Point */}
        <GlintPoint cx={50} cy={50} size={3} delay={0} duration={1} />

        {/* Second Glint Point */}
        <GlintPoint cx={60} cy={50} size={2.5} delay={0.4} duration={1.2} />
      </svg>
    </div>
  );
};

interface GlintPointProps {
  cx: number;
  cy: number;
  size: number;
  delay: number;
  duration: number;
}

const GlintPoint: FC<GlintPointProps> = ({ cx, cy, size, delay, duration }) => {
  // Scale factor for ray position calculation
  const smaller = size < 3; // If second glint (which is smaller)
  const rayLength = smaller ? 4 : 5;
  const strokeWidth = smaller ? 1.2 : 1.5;

  return (
    <>
      {/* Central white dot */}
      <circle cx={cx} cy={cy} r={size} fill="white">
        <animate
          attributeName="opacity"
          values={delay === 0 ? "0;1;1;0.5;0" : "0;0;0;1;1;0"}
          dur={`${duration}s`}
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
      </circle>

      {/* Vertical rays (top and bottom) */}
      <line
        x1={cx}
        y1={cy - 2}
        x2={cx}
        y2={cy - rayLength}
        stroke="white"
        strokeWidth={strokeWidth}
      >
        <animate
          attributeName="y1"
          values={`${cy - 2};${cy - rayLength - 5}`}
          dur="0.3s"
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values={delay === 0 ? "0;1;0" : "0;0;1;0"}
          dur="0.8s"
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
      </line>

      <line
        x1={cx}
        y1={cy + 2}
        x2={cx}
        y2={cy + rayLength}
        stroke="white"
        strokeWidth={strokeWidth}
      >
        <animate
          attributeName="y2"
          values={`${cy + 1};${cy + rayLength + 3}`}
          dur="0.3s"
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values={delay === 0 ? "0;1;0" : "0;0;1;0"}
          dur="0.8s"
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
      </line>

      {/* Horizontal rays (left and right) */}
      <line
        x1={cx - 2}
        y1={cy}
        x2={cx - rayLength}
        y2={cy}
        stroke="white"
        strokeWidth={strokeWidth}
      >
        <animate
          attributeName="x1"
          values={`${cx - 2};${cx - rayLength - 5}`}
          dur="0.3s"
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values={delay === 0 ? "0;1;0" : "0;0;1;0"}
          dur="0.8s"
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
      </line>

      <line
        x1={cx + 2}
        y1={cy}
        x2={cx + rayLength}
        y2={cy}
        stroke="white"
        strokeWidth={strokeWidth}
      >
        <animate
          attributeName="x2"
          values={`${cx + 2};${cx + rayLength + 5}`}
          dur="0.3s"
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values={delay === 0 ? "0;1;0" : "0;0;1;0"}
          dur="0.8s"
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
      </line>

      {/* Diagonal rays */}
      <DiagonalRays
        cx={cx}
        cy={cy}
        rayLength={rayLength}
        strokeWidth={strokeWidth}
        delay={delay + 0.1}
      />

      {/* Subtle ring effect */}
      <circle
        cx={cx}
        cy={cy}
        r={smaller ? 8 : 10}
        stroke="white"
        strokeWidth="0.5"
        fill="none"
      >
        <animate
          attributeName="r"
          values={smaller ? "4;12" : "5;15"}
          dur={smaller ? "0.6s" : "0.7s"}
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values={delay === 0 ? "0;0.3;0" : "0;0;0.3;0"}
          dur={smaller ? "0.6s" : "0.7s"}
          begin={delay ? `${delay}s` : undefined}
          repeatCount="1"
        />
      </circle>
    </>
  );
};

interface DiagonalRaysProps {
  cx: number;
  cy: number;
  rayLength: number;
  strokeWidth: number;
  delay: number;
}

const DiagonalRays: FC<DiagonalRaysProps> = ({
  cx,
  cy,
  rayLength,
  strokeWidth,
  delay,
}) => {
  const offset = 2;
  const diagonalOffset = rayLength - 2;

  return (
    <>
      {/* NW diagonal */}
      <line
        x1={cx - offset}
        y1={cy - offset}
        x2={cx - 2}
        y2={cy - 2}
        stroke="white"
        strokeWidth={strokeWidth}
      >
        <animate
          attributeName="x1"
          values={`${cx - 2};${cx - diagonalOffset}`}
          dur="0.3s"
          begin={`${delay}s`}
          repeatCount="1"
        />
        <animate
          attributeName="y1"
          values={`${cy - 2};${cy - diagonalOffset}`}
          dur="0.3s"
          begin={`${delay}s`}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="0.8s"
          begin={`${delay}s`}
          repeatCount="1"
        />
      </line>

      {/* NE diagonal */}
      <line
        x1={cx + 2}
        y1={cy - 2}
        x2={cx + offset}
        y2={cy - offset}
        stroke="white"
        strokeWidth={strokeWidth}
      >
        <animate
          attributeName="x2"
          values={`${cx + 2};${cx + diagonalOffset}`}
          dur="0.3s"
          begin={`${delay}s`}
          repeatCount="1"
        />
        <animate
          attributeName="y2"
          values={`${cy - 2};${cy - diagonalOffset}`}
          dur="0.3s"
          begin={`${delay}s`}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="0.8s"
          begin={`${delay}s`}
          repeatCount="1"
        />
      </line>

      {/* SE diagonal */}
      <line
        x1={cx + 2}
        y1={cy + 2}
        x2={cx + offset}
        y2={cy + offset}
        stroke="white"
        strokeWidth={strokeWidth}
      >
        <animate
          attributeName="x2"
          values={`${cx + 2};${cx + diagonalOffset}`}
          dur="0.3s"
          begin={`${delay}s`}
          repeatCount="1"
        />
        <animate
          attributeName="y2"
          values={`${cy + 2};${cy + diagonalOffset}`}
          dur="0.3s"
          begin={`${delay}s`}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="0.8s"
          begin={`${delay}s`}
          repeatCount="1"
        />
      </line>

      {/* SW diagonal */}
      <line
        x1={cx - 2}
        y1={cy + 2}
        x2={cx - offset}
        y2={cy + offset}
        stroke="white"
        strokeWidth={strokeWidth}
      >
        <animate
          attributeName="x1"
          values={`${cx - 2};${cx - diagonalOffset}`}
          dur="0.3s"
          begin={`${delay}s`}
          repeatCount="1"
        />
        <animate
          attributeName="y2"
          values={`${cy + 2};${cy + diagonalOffset}`}
          dur="0.3s"
          begin={`${delay}s`}
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="0.8s"
          begin={`${delay}s`}
          repeatCount="1"
        />
      </line>
    </>
  );
};

export default TeethGlint;
