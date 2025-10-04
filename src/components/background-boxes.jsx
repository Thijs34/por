"use client";
import * as React from "react";
import { cn } from "../lib/utils";

const ROWS = 150;
const COLS = 100;

export const Boxes = React.memo(function Boxes({ className, ...props }) {
  const rows = React.useMemo(() => new Array(ROWS).fill(1), []);
  const cols = React.useMemo(() => new Array(COLS).fill(1), []);

  return (
    <div
      style={{
        transform: "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)",
        pointerEvents: "none", // disables pointer events for the grid container
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...props}
    >
      {rows.map((_, i) => (
        <div
          key={`row${i}`}
          className="w-16 h-8 border-l border-slate-600 relative"
          style={{ pointerEvents: "auto" }} // enables pointer events only for cells
        >
          {cols.map((_, j) => (
            <div
              key={`col${j}`}
              className="box-cell w-16 h-8 border-r border-t border-slate-600 relative transition-colors duration-1000"
              tabIndex={-1} // not focusable
              aria-hidden="true" // hides from screen readers (optional)
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-500 stroke-[0.8px] pointer-events-none"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});