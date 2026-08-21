"use client";

import { useEffect, useState } from "react";
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

export default function CyberBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate a fixed, performant set of floating cyber particles on client mount
    const count = 24;
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 3 + 1.5, // 1.5px to 4.5px
      duration: Math.random() * 8 + 6, // 6s to 14s
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.15,
    }));
    setParticles(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      

      {/* 3. Floating Cyber Data Nodes / Particles */}
      {particles.map((p) => (
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
            x: [0, (p.id % 2 === 0 ? 15 : -15), 0],
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

      {/* 4. Subtle Ambient Corner HUD Accents */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-primary/10 tracking-[3px] hidden md:block">
        <span>// SYS.ONLINE <br />// ACTIVE</span>
      </div>
    </div>
  );
}
