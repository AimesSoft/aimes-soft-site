"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;
    let particles: Particle[] = [];
    let pointer: { x: number; y: number } | null = null;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(82, Math.max(38, Math.floor(width / 24)));
      particles = Array.from({ length: count }, (_, index) => {
        const angle = (index * 137.5 * Math.PI) / 180;
        return {
          x: (Math.sin(angle) * 0.5 + 0.5) * width,
          y: (Math.cos(angle * 1.31) * 0.5 + 0.5) * height,
          vx: (Math.sin(index * 2.1) - 0.5) * 0.26,
          vy: (Math.cos(index * 1.7) - 0.5) * 0.26,
          size: 1.2 + ((index * 7) % 18) / 10,
        };
      });
    };

    const draw = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(2, 2, 4, 0.7)";
      context.fillRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const first = particles[i];

        for (let j = i + 1; j < particles.length; j += 1) {
          const second = particles[j];
          const distance = Math.hypot(first.x - second.x, first.y - second.y);

          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.28;
            context.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);
            context.stroke();
          }
        }

        if (pointer) {
          const pointerDistance = Math.hypot(first.x - pointer.x, first.y - pointer.y);
          if (pointerDistance < 170) {
            const alpha = (1 - pointerDistance / 170) * 0.55;
            context.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            context.lineWidth = 1.2;
            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(pointer.x, pointer.y);
            context.stroke();
          }
        }

        const pulse = Math.sin(frame / 34 + i) * 0.25 + 0.75;
        context.fillStyle = `rgba(255, 255, 255, ${0.42 + pulse * 0.22})`;
        context.beginPath();
        context.arc(first.x, first.y, first.size, 0, Math.PI * 2);
        context.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    const onPointerLeave = () => {
      pointer = null;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-30 h-full w-full bg-black"
    />
  );
}
