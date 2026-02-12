"use client";

import { useState, useRef } from 'react';
import ScrollHearts from './components/FloatingHearts';
import ValentineText from './components/ValentinesText';
import PhotoGallery from './components/PhotoGallery';
import Proposal from './components/Proposal'; 
import LoveLetter from './components/LoveLetter';

export default function HomePage() {
  const [isAccepted, setIsAccepted] = useState(false);
  const letterRef = useRef(null);

  const handleSuccess = () => {
    setIsAccepted(true);
    setTimeout(() => {
      letterRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 4000);
  };

  return (
    <main 
      className="relative w-full min-h-[200vh] bg-[linear-gradient(135deg,#d35c8c_0%,#ffc9fc_100%)] bg-fixed overflow-x-hidden"
    >
      
      <ScrollHearts />
      <section className="w-full relative z-10">
        <ValentineText />
      </section>

      <section className="w-full relative z-10 py-20 backdrop-blur-sm">
        <PhotoGallery />
      </section>

      <section className="min-h-screen w-full flex items-center justify-center relative z-10 pb-20">
        <Proposal onSuccess={handleSuccess} />
      </section>

      {isAccepted && (
        <section 
          ref={letterRef} 
          className="min-h-screen w-full flex items-center justify-center relative z-10 pb-20 animate-fadeIn"
        >
          <LoveLetter />
        </section>
      )}

    </main>
  );
}