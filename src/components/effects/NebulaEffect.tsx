import React, { useEffect, useRef } from 'react';

export function NebulaEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawNebula = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.001;

      // Create multiple layered nebula clouds
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createRadialGradient(
          canvas.width * (0.3 + Math.sin(time + i) * 0.2),
          canvas.height * (0.4 + Math.cos(time + i) * 0.1),
          0,
          canvas.width * (0.3 + Math.sin(time + i) * 0.2),
          canvas.height * (0.4 + Math.cos(time + i) * 0.1),
          canvas.height * 0.8
        );

        gradient.addColorStop(0, `rgba(88, 28, 135, ${0.002 - i * 0.0005})`);
        gradient.addColorStop(0.5, `rgba(88, 28, 135, ${0.001 - i * 0.0003})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(drawNebula);
    };

    resize();
    drawNebula();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}