"use client";

interface HeroPatternProps {
  variant?: string;
}

export function HeroPattern({ variant }: HeroPatternProps) {
  return (
    <div className="absolute top-6 md:top-8 right-6 md:right-16 z-10 pointer-events-none select-none opacity-60">
      {/* Hanging Line */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-white/20" />
      
      {/* 3D Wireframe Floating Cube */}
      <div className="cube-wrapper">
        <div className="cube">
          <div className="cube-face front" />
          <div className="cube-face back" />
          <div className="cube-face right" />
          <div className="cube-face left" />
          <div className="cube-face top" />
          <div className="cube-face bottom" />
        </div>
      </div>
    </div>
  );
}
