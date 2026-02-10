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

export default function Proposal() {
  // 'question' | 'confirm' | 'trapped' | 'success'
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
    setStage('question'); 
  };
  
  const handleConfirmNo = () => {
    setStage('question');
  };

  const handleFinalYes = () => {
    // Create a pop heart animation
    const newHeart = {
      id: Date.now(),
    };
    console.log('Adding heart with id:', newHeart.id);
    setPopHearts([...popHearts, newHeart]);
    
    // Remove the heart animation after 2.5 seconds
    setTimeout(() => {
      console.log('Removing heart with id:', newHeart.id);
      setPopHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2500);
    
    setStage('success');
  };

  const showGiantYes = stage === 'trapped' || isHoverTrapped;

  return (
    <div className="flex items-center justify-center py-20 px-4 w-full">
      <style>{heartPopStyles}</style>
      {/* Pop Hearts */}
      {popHearts.length > 0 && console.log('Rendering', popHearts.length, 'hearts')}
      {popHearts.map((heart, index) => {
        console.log('Rendering heart', index, 'with id:', heart.id);
        return (
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
              border: '2px solid red',
              borderRadius: '50%',
            }}
          >
            <div style={{ 
              fontSize: '150px',
              lineHeight: '1',
              margin: '0',
              padding: '0',
            }}>
              ❤️
            </div>
          </div>
        );
      })}
      <div className="relative bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center border-4 border-pink-200 transition-all duration-500 hover:scale-[1.02]">
        <div className="absolute -top-8 -left-8 text-7xl animate-bounce delay-100">🌹</div>
        <div className="absolute -top-8 -right-8 text-7xl animate-bounce delay-300">🌸</div>
        <div className="absolute -bottom-8 -left-8 text-7xl animate-bounce delay-500">🌷</div>
        <div className="absolute -bottom-8 -right-8 text-7xl animate-bounce delay-700">🌻</div>
        <div className="absolute top-1/2 -left-12 text-4xl animate-pulse text-pink-400">💖</div>
        <div className="absolute top-1/2 -right-12 text-4xl animate-pulse text-pink-400 delay-75">💖</div>
        {stage === 'success' ? (
          <div className="animate-pulse space-y-6">
            <h1 className="text-5xl font-bold text-pink-600 font-handwriting">
              YAYYY! 
            </h1>
            <p className="text-2xl text-gray-700 font-handwriting">
              best valentines day eva, lav u
            </p>
            <div className="text-9xl mt-6 animate-bounce">💏</div>
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
            <span className="text-7xl font-bold drop-shadow-md">YES!!!</span>
            <span className="text-2xl font-light italic">(There is no escape hehe)</span>
            <div className="flex gap-4 text-5xl">
              <span>🥺</span><span>👉</span><span>👈</span>
            </div>
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
                No, go back! 😅
              </button>
              <button 
                onClick={handleConfirmYes}
                className="px-6 py-3 bg-red-500 text-white text-xl font-bold rounded-full hover:bg-red-600 transition-colors"
              >
                Yes, I'm sure 😔
              </button>
            </div>
          </div>

        ) : (
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-pink-600 leading-tight font-handwriting drop-shadow-sm">
              will you be my valentines beb?
            </h2>
            
            <div className="text-9xl my-6 animate-bounce">🥺</div>

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