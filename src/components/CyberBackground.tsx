"use client";

import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const staticParticles: Particle[] = [
  { id: 0, x: 12, y: 18, size: 2.5, duration: 9, delay: 0.2, opacity: 0.35 },
  { id: 1, x: 84, y: 22, size: 3.2, duration: 11, delay: 1.1, opacity: 0.4 },
  { id: 2, x: 35, y: 70, size: 2.0, duration: 8, delay: 2.3, opacity: 0.25 },
  { id: 3, x: 62, y: 85, size: 3.8, duration: 13, delay: 0.8, opacity: 0.45 },
  { id: 4, x: 20, y: 45, size: 1.8, duration: 7, delay: 3.0, opacity: 0.3 },
  { id: 5, x: 78, y: 55, size: 2.8, duration: 10, delay: 1.5, opacity: 0.35 },
  { id: 6, x: 48, y: 15, size: 2.2, duration: 9, delay: 2.7, opacity: 0.28 },
  { id: 7, x: 92, y: 72, size: 3.0, duration: 12, delay: 0.5, opacity: 0.4 },
  { id: 8, x: 8, y: 88, size: 2.4, duration: 8, delay: 1.8, opacity: 0.3 },
  { id: 9, x: 55, y: 38, size: 3.5, duration: 10, delay: 3.2, opacity: 0.42 },
  { id: 10, x: 28, y: 92, size: 1.9, duration: 7, delay: 0.9, opacity: 0.25 },
  { id: 11, x: 72, y: 10, size: 2.6, duration: 11, delay: 2.1, opacity: 0.38 },
  { id: 12, x: 42, y: 60, size: 2.1, duration: 9, delay: 1.4, opacity: 0.32 },
  { id: 13, x: 88, y: 40, size: 3.1, duration: 12, delay: 2.8, opacity: 0.4 },
  { id: 14, x: 15, y: 75, size: 2.7, duration: 8, delay: 0.7, opacity: 0.36 },
  { id: 15, x: 65, y: 25, size: 2.3, duration: 10, delay: 3.5, opacity: 0.29 },
];

export default function CyberBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* Floating Cyber Data Nodes / Particles */}
      {staticParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 3}px rgba(0, 240, 255, 0.8)`,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, p.id % 2 === 0 ? 15 : -15, 0],
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle Ambient Corner HUD Accents */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-primary/10 tracking-[3px] hidden md:block">
        <span>
          {"// SYS.ONLINE"} <br />
          {"// ACTIVE"}
        </span>
      </div>
    </div>
  );
}
