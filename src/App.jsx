import React from "react";
import { Boxes } from "./components/background-boxes";

export default function App() {
  return (
    <div className="relative w-screen h-screen bg-[#0a0f1c] overflow-hidden flex items-center justify-center">
      {/* Background Boxes */}
      <Boxes className="absolute inset-0 opacity-70" />

      {/* Optional overlay for subtle darkening */}
      <div className="absolute inset-0 bg-[#0a0f1c] opacity-50 pointer-events-none" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-white font-extrabold text-5xl md:text-6xl mb-4 drop-shadow">
          Background Boxes
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl">
          Smooth color trail hover effect
        </p>
      </div>
    </div>
  );
}
