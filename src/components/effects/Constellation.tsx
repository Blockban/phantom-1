import React, { useEffect, useRef } from 'react';

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const stars: Array<{x: number; y: number; size: number; opacity: number}> = [];
    const connections: Array<{from: number; to: number}> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars.length = 0;
      connections.length = 0;

      for (let i = 0; i < 50; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3
        });
      }

      // Create constellation connections
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          if (Math.random() > 0.97) {
            connections.push({ from: i, to: j });
          }
        }
      }
    };

    const drawConstellation = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      connections.forEach(conn => {
        const from = stars[conn.from];
        const to = stars[conn.to];
        
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = 'rgba(123, 31, 162, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(drawConstellation);
    };

    resize();
    createStars();
    drawConstellation();

    window.addEventListener('resize', () => {
      resize();
      createStars();
    });

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}