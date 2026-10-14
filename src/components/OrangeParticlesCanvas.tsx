/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

interface Particle {
  angle: number;
  dist: number;
  speed: number;
  baseSize: number;
  maxDist: number;
  color: string;
}

const ORANGE_PALETTE = [
  '#FF6A00', // vibrant bright orange
  '#FF8526', // warm amber-orange
  '#FFA34D', // soft glowing orange
  '#FF5500', // deep neon orange
  '#FFB770', // light bright spark
];

export function OrangeParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const maxRadius = () => Math.sqrt(width * width + height * height) * 0.55;

    const PARTICLE_COUNT = 75;
    const particles: Particle[] = [];

    const createParticle = (randomDistance = true): Particle => {
      const currentMax = maxRadius();
      return {
        angle: Math.random() * Math.PI * 2,
        dist: randomDistance ? Math.random() * currentMax : Math.random() * 25,
        speed: 1.2 + Math.random() * 2.4,
        baseSize: 1.2 + Math.random() * 2.0,
        maxDist: currentMax,
        color: ORANGE_PALETTE[Math.floor(Math.random() * ORANGE_PALETTE.length)],
      };
    };

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const currentMax = maxRadius();

      // Draw faint center glow
      const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 140);
      centerGlow.addColorStop(0, 'rgba(255, 106, 0, 0.16)');
      centerGlow.addColorStop(0.5, 'rgba(255, 106, 0, 0.05)');
      centerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      // Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Accelerate slightly as it moves toward borders for realistic perspective
        p.speed += 0.025;
        p.dist += p.speed;

        // Reset if particle moves beyond screen borders
        if (p.dist > currentMax) {
          particles[i] = createParticle(false);
          continue;
        }

        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * p.dist;

        // Opacity curve: fade in from center, strong in middle, fade out near screen borders
        const progress = p.dist / currentMax;
        let alpha = 1;
        if (progress < 0.15) {
          alpha = progress / 0.15;
        } else if (progress > 0.82) {
          alpha = (1 - progress) / 0.18;
        }

        // Particle size scales up as it radiates outward
        const currentSize = Math.max(0.8, p.baseSize * (0.6 + progress * 1.5));

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8 + progress * 6;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(x, y, currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Extra white core dot for bright specular sparkle on larger particles
        if (currentSize > 2.0 && progress > 0.25) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
          ctx.beginPath();
          ctx.arc(x, y, currentSize * 0.45, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
