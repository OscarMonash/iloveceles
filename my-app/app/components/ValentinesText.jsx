"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Poppins, Montserrat } from 'next/font/google';

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
  const messageRef = useRef(null);
  
  const messages = [
    "Happy Valentines Day Celes",
    "I Love You soso Much",
    "So Happy To Spend Another Year With You",
    "Lowkey Making This At Work Rn",
    "Hope You Like It Heh",
    "Zebros" 
  ];

  // Animation constants...
  const PAUSE_DURATION = 2;
  const SLIDE_IN_DURATION = 1;
  const BOUNCE_DURATION = 0.5;
  const SLIDE_OUT_DURATION = 0.5;
  const TOTAL_CYCLE = SLIDE_IN_DURATION + BOUNCE_DURATION + PAUSE_DURATION + SLIDE_OUT_DURATION;

  useEffect(() => {
    // ... (GSAP Animation Logic stays exactly the same) ...
    if (!containerRef.current) return;
    
    gsap.set(titleRef.current, { opacity: 0, y: 50, scale: 0.9 });
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.6)"
    });

    gsap.to(titleRef.current, {
      scale: 1.05,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    const messageTimeline = gsap.timeline({ repeat: 0 });
    let currentTime = 0;

    messages.forEach((message, index) => {
      const isLastMessage = index === messages.length - 1;
      
      messageTimeline
        .call(() => {
          if (messageRef.current) messageRef.current.textContent = message;
        }, null, currentTime)
        .fromTo(messageRef.current,
          { opacity: 0, x: -100, scale: 0.5, filter: "blur(0px)", rotation: 0 },
          { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", duration: SLIDE_IN_DURATION, ease: "back.out(1.7)" },
          currentTime
        )
        .to(messageRef.current, {
            y: -20,
            duration: BOUNCE_DURATION,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut"
        }, currentTime + SLIDE_IN_DURATION);

      currentTime += SLIDE_IN_DURATION + BOUNCE_DURATION + PAUSE_DURATION;

      if (!isLastMessage) {
        messageTimeline.to(messageRef.current, {
          opacity: 0,
          x: 100,
          scale: 1.1,
          filter: "blur(12px)",
          duration: SLIDE_OUT_DURATION,
          ease: "power2.in"
        }, currentTime);
        currentTime += SLIDE_OUT_DURATION;
      }
    });

    return () => messageTimeline.kill();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative z-20 w-full flex flex-col items-center justify-center px-4"
    >
      <h1 
        ref={titleRef}
        className={`
          ${titleFont.className} 
          text-6xl md:text-8xl lg:text-9xl 
          font-black text-center mb-16 text-white uppercase 
          tracking-tighter leading-none
          [text-shadow:_0_4px_20px_rgba(0,0,0,0.5)]
          [-webkit-text-stroke:_2px_rgba(255,255,255,0.1)]
        `}
      >
        Happy Valentines Day celes
      </h1>

      <div className="h-[300px] w-full max-w-6xl flex items-center justify-center perspective-1000">
        <div
          ref={messageRef}
          className={`
            ${messageFont.className} 
            text-lg md:text-5xl lg:text-6xl 
            font-black text-center text-white leading-tight uppercase 
            tracking-wide antialiased
            opacity-0
            [text-shadow:_0_10px_40px_rgba(0,0,0,0.4)]
            will-change-[transform,opacity,filter]
          `}
        />
      </div>
    </div>
  );
}