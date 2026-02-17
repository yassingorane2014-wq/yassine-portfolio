"use client";

import dynamic from "next/dynamic";

const Scene3DContent = dynamic(
  () => import("./Scene3DContent"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 animate-pulse" />
      </div>
    )
  }
);

export default function Scene3D() {
  return <Scene3DContent />;
}
