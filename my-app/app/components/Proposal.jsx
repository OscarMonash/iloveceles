"use client";

import { useState } from 'react';

const heartPopStyles = `
  @keyframes heartPop {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    40% {
      transform: translate(-50%, -50%) scale(2.5);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  }
`;

// 1. ACCEPT THE PROP HERE
export default function Proposal({ onSuccess }) {
  const [stage, setStage] = useState('question');
  const [isHoverTrapped, setIsHoverTrapped] = useState(false);
  const [popHearts, setPopHearts] = useState([]);
  
  const handleHoverEnter = () => {
    setIsHoverTrapped(true);
  };
  
  const handleHoverLeave = () => {
    if (stage !== 'trapped') {
      setIsHoverTrapped(false);
    }
  };

  const handleNoClick = () => {
    setStage('confirm');
    setIsHoverTrapped(false);
  };

  const handleConfirmYes = () => {
    setStage('trapped');
  };
  
  const handleConfirmNo = () => {
    setStage('question');
  };

  const handleFinalYes = () => {
    const newHeart = {
      id: Date.now(),
    };
    setPopHearts([...popHearts, newHeart]);
    
    setTimeout(() => {
      setPopHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2500);
    
    setStage('success');

    // 2. TRIGGER THE LOVE LETTER UNLOCK
    if (onSuccess) {
      onSuccess();
    }
  };

  const showGiantYes = stage === 'trapped' || isHoverTrapped;

  return (
    <div className="flex items-center justify-center py-20 px-4 w-full">
      <style>{heartPopStyles}</style>
      
      {/* Pop Hearts Animation */}
      {popHearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed z-[9999]"
          style={{
            left: '50vw',
            top: '50vh',
            width: '150px',
            height: '150px',
            pointerEvents: 'none',
            animation: 'heartPop 2.5s ease-out forwards',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            borderRadius: '50%',
          }}
        >
          <div style={{ fontSize: '150px', lineHeight: '1' }}>❤️</div>
        </div>
      ))}

      <div className="relative bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center border-4 border-pink-200 transition-all duration-500 hover:scale-[1.02]">
        
        {/* 3. FIXED FLOWER POSITIONING (Prevents side-scroll on mobile) 
            -left-2 on mobile, -left-8 on desktop (md:)
        */}
        <div className="absolute -top-6 -left-2 md:-left-8 md:-top-8 text-5xl md:text-7xl animate-bounce delay-100">🌹</div>
        <div className="absolute -top-6 -right-2 md:-right-8 md:-top-8 text-5xl md:text-7xl animate-bounce delay-300">🌸</div>
        <div className="absolute -bottom-6 -left-2 md:-left-8 md:-bottom-8 text-5xl md:text-7xl animate-bounce delay-500">🌷</div>
        <div className="absolute -bottom-6 -right-2 md:-right-8 md:-bottom-8 text-5xl md:text-7xl animate-bounce delay-700">🌻</div>

        {stage === 'success' ? (
          <div className="animate-pulse space-y-6">
            <h1 className="text-5xl font-bold text-pink-600 font-handwriting">
              YAYYY! 
            </h1>
            <p className="text-2xl text-gray-700 font-handwriting">
              best valentines day eva, lav u
            </p>
            
            {/* VIDEO SECTION */}
            <div className="w-full overflow-hidden rounded-xl shadow-lg border-2 border-pink-100">
              <video 
                src="/images/celes1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex justify-center gap-4 text-4xl">
              <span>💖</span><span>💝</span><span>💖</span>
            </div>
          </div>

        ) : showGiantYes ? (
          <button 
            onClick={handleFinalYes}
            onMouseLeave={handleHoverLeave}
            className="w-full h-80 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-2xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform animate-pulse shadow-xl border-4 border-white"
          >
            <span className="text-4xl font-bold drop-shadow-md">YES I WANT TO BE UR VALENTINES OSCAR THE BEST</span>
            <span className="text-2xl font-light italic">(too bad 🤷)</span>
          </button>

        ) : stage === 'confirm' ? (
          <div className="space-y-6 animate-fadeIn">
             <h2 className="text-3xl font-bold text-red-500 font-handwriting">
                are you sure? 💔
            </h2>
            <p className="text-gray-600 text-lg">
                really really sure? 
            </p>
            
            <div className="flex justify-center gap-6 mt-6">
               <button 
                onClick={handleConfirmNo}
                className="px-6 py-3 bg-gray-400 text-white text-xl font-bold rounded-full hover:bg-gray-500 transition-colors"
              >
                no beb i lav u i would never say no
              </button>
              <button 
                onClick={handleConfirmYes}
                className="px-6 py-3 bg-red-500 text-white text-xl font-bold rounded-full hover:bg-red-600 transition-colors"
              >
                yes whateva
              </button>
            </div>
          </div>

        ) : (
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-pink-600 leading-tight font-handwriting drop-shadow-sm">
              will you be my valentines beb?
            </h2>
            <img src="/images/sayyes.gif" alt="Puppy Eyes" className="w-40 mx-auto animate-bounce" />

            <div className="flex justify-center gap-8 mt-8 relative">
              <button 
                onClick={handleFinalYes}
                className="px-10 py-5 bg-green-500 text-white text-3xl font-bold rounded-full shadow-xl hover:bg-green-600 hover:scale-110 hover:shadow-2xl transition-all duration-300 z-10"
              >
                YES 👅
              </button>
              <button 
                onMouseEnter={handleHoverEnter} 
                onClick={handleNoClick}         
                className="px-10 py-5 bg-red-400 text-white text-3xl font-bold rounded-full shadow-xl hover:bg-red-500 transition-all duration-300"
              >
                NO 👎
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}