"use client";

import { useEffect, useRef } from 'react';

export default function ScrollHearts() {
  const containerRef = useRef(null);
  const lastSpawnTime = useRef(0);

  useEffect(() => {
    // Defined inside useEffect so it can access containerRef easily
    const spawnHeart = () => {
      if (!containerRef.current) return;

      const heart = document.createElement('div');
      
      // 1. RANDOMIZE APPEARANCE
      const size = Math.floor(Math.random() * 30) + 20; // 20px - 50px
      
      // 2. FIX: Limit to 90% to prevent horizontal overflow 
      // (If a heart spawns at 100% + 50px width, it creates a scrollbar. 90% is safe.)
      const startLeft = Math.random() * 90; 
      
      // 3. SET STYLES
      heart.style.position = 'fixed';
      heart.style.bottom = '-50px';
      heart.style.left = `${startLeft}%`; 
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.zIndex = '50'; 
      heart.style.pointerEvents = 'none'; 
      
      // 4. SVG CONTENT
      heart.innerHTML = `
        <svg viewBox="0 0 32 29.6" style="width: 100%; height: 100%; drop-shadow(0 0 3px rgba(255,255,255,0.5));">
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
          c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="#ffdaed" />
        </svg>
      `;

      containerRef.current.appendChild(heart);

      // 5. ANIMATE (Float Up)
      const animation = heart.animate([
        { transform: `translateY(0) scale(0.5) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(-100vh) scale(1.2) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], {
        duration: 6000 + Math.random() * 2000, 
        easing: 'ease-out'
      });

      animation.onfinish = () => {
        heart.remove();
      };
    };

    const handleScroll = () => {
      // THROTTLE: Limit hearts to 1 every 50ms
      const now = Date.now();
      if (now - lastSpawnTime.current < 50) return;
      lastSpawnTime.current = now;

      spawnHeart();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
}