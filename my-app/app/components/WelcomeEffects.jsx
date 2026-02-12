"use client";

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';

export default function WelcomeEffects() {
  useEffect(() => {
    // --- 1. CONFETTI BLAST ---
    const duration = 3000; // 3 seconds
    const end = Date.now() + duration;

    // A nice mix of pink and red colors
    const colors = ['#ff69b4', '#dee187', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
        zIndex: 9999
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
        zIndex: 9999
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());


    // --- 2. FLYING IMAGE ANIMATION ---
    // This animates the image from off-screen Left to off-screen Right
    gsap.fromTo("#flying-cupid", 
      { 
        x: -300,        // Start off-screen left
        y: 100,         // Start slightly lower
        rotation: -20,  // Tilt back
        opacity: 1 
      },
      { 
        x: window.innerWidth + 300, // Fly way off-screen right
        y: -100,                    // Fly slightly upwards
        rotation: 20,               // Tilt forward
        duration: 6,                // Take 6 seconds to fly across
        ease: "power1.inOut",
        delay: 0.2
      }
    );

  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <img 
        id="flying-cupid"
        src="/images/tongueout.gif" 
        alt="Flying Cupid"
        className="absolute top-20 w-32 md:w-48"
        style={{ opacity: 0 }} 
      />
    </div>
  );
}