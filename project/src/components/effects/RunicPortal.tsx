import React, { useEffect, useRef } from 'react';

export function RunicPortal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const runeCircles: Array<{
      angle: number;
      radius: number;
      speed: number;
      runes: string[];
      opacity: number;
    }> = [];

    const runeSet = '᚛᚜ᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createRunicCircles = () => {
      runeCircles.length = 0;
      const numCircles = 3;

      for (let i = 0; i < numCircles; i++) {
        const runes = Array.from({ length: 12 }, () => 
          runeSet[Math.floor(Math.random() * runeSet.length)]
        );

        runeCircles.push({
          angle: 0,
          radius: 150 + i * 80,
          speed: 0.001 - (i * 0.0002),
          runes,
          opacity: 0.3 - (i * 0.05)
        });
      }
    };

    const drawRunicPortal = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      runeCircles.forEach(circle => {
        ctx.save();
        ctx.translate(centerX, centerY);
        
        circle.runes.forEach((rune, index) => {
          const angle = (index / circle.runes.length) * Math.PI * 2 + circle.angle;
          const x = Math.cos(angle) * circle.radius;
          const y = Math.sin(angle) * circle.radius;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle + Math.PI / 2);
          ctx.font = '24px serif';
          ctx.fillStyle = `rgba(147, 51, 234, ${circle.opacity})`;
          ctx.fillText(rune, -10, 0);
          ctx.restore();
        });

        circle.angle += circle.speed;
        ctx.restore();
      });

      requestAnimationFrame(drawRunicPortal);
    };

    resize();
    createRunicCircles();
    drawRunicPortal();

    window.addEventListener('resize', () => {
      resize();
      createRunicCircles();
    });

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30" />;
}