"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Poppins, Montserrat } from 'next/font/google';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const titleFont = Poppins({ 
  subsets: ['latin'], 
  weight: ['900'] 
});

const messageFont = Montserrat({ 
  subsets: ['latin'], 
  weight: ['900'] 
});

export default function ValentineText() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const messageRefs = useRef([]);
  
  const messages = [
    "Happy Valentines Day Celes",
    "I Love You soso Much",
    "So Happy To Spend Another Year With You",
    "Lowkey Making This At Work Rn",
    "Hope You Like It Heh",
    "Zebros" 
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    
    // 1. Initial Title Animation (Plays once on load)
    gsap.set(titleRef.current, { opacity: 0, y: 50 });
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.6)"
    });

    // 2. The Scroll Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // Start when top of container hits top of viewport
        end: "+=4000",    // The animation lasts for 4000px of scrolling
        scrub: 1,         // Smooth scrubbing (1 second catch-up)
        pin: true,        // Pin the container while scrolling
        anticipatePin: 1
      }
    });

    // 3. Loop through messages and animate them in sequence
    messageRefs.current.forEach((msg, index) => {
      // Set initial state for all messages
      gsap.set(msg, { opacity: 0, scale: 0.5, filter: "blur(10px)", y: 100 });

      // Animate In
      tl.to(msg, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 2,
        ease: "power2.out"
      })
      // Pause slightly (by adding an empty tween)
      .to(msg, { duration: 2 }) 
      // Animate Out (unless it's the last one)
      .to(msg, {
        opacity: index === messages.length - 1 ? 1 : 0, // Keep the last one visible
        scale: index === messages.length - 1 ? 1 : 1.5,
        filter: "blur(20px)",
        y: -100,
        duration: 2,
        ease: "power2.in"
      }, "+=0"); // Overlap slightly
    });

    return () => {
      // Clean up ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [messages.length]);

  // Helper to add refs to the array
  const addToRefs = (el) => {
    if (el && !messageRefs.current.includes(el)) {
      messageRefs.current.push(el);
    }
  };

  return (
    // Changed height to h-screen because 'pin: true' needs a full screen container
    <div 
      ref={containerRef}
      className="relative z-20 w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Title stays fixed at the top part */}
      <h1 
        ref={titleRef}
        className={`
          ${titleFont.className} 
          absolute top-[15%] md:top-[20%]
          text-4xl md:text-6xl
          font-black text-center text-white uppercase 
          tracking-tighter leading-none
          [text-shadow:_0_4px_20px_rgba(0,0,0,0.5)]
          [-webkit-text-stroke:_2px_rgba(255,255,255,0.1)]
          z-30
        `}
      >
        Happy Valentines Day celes
      </h1>

      {/* Container for the stacked messages */}
      <div className="relative w-full max-w-6xl h-[200px] flex items-center justify-center perspective-1000 mt-20">
        {messages.map((text, i) => (
          <div
            key={i}
            ref={addToRefs}
            className={`
              ${messageFont.className} 
              absolute top-0 left-0 w-full
              text-3xl md:text-6xl lg:text-7xl 
              font-black text-center text-white leading-tight uppercase 
              tracking-wide antialiased
              flex items-center justify-center
              [text-shadow:_0_10px_40px_rgba(0,0,0,0.4)]
              will-change-[transform,opacity,filter]
            `}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}