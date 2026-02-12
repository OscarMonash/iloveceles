"use client";

const images = [
  "/images/celes1.jpeg",
  "/images/celes2.jpeg",
  "/images/celes3.jpeg",
  "/images/celes4.jpeg",
  "/images/celes5.jpeg",
  "/images/celes6.jpeg",
];

export default function PhotoGallery() {
  return (
    // FIXED: Added 'max-w-[100vw]' and 'overflow-x-hidden'
    // This forces the container to strictly cut off anything that tries to go sideways
    <div className="w-full max-w-[100vw] py-20 flex flex-col items-center justify-center overflow-x-hidden overflow-hidden">
      
      <h2 className="text-center text-white text-4xl font-bold mb-10 animate-pulse z-30 px-4" 
          style={{ fontFamily: "Montserrat", textShadow: '0 0 20px rgba(255,105,180,0.8)' }}>
        supa love u bebi, here are some of my fav memories 
      </h2>

      {/* MASK CONTAINER */}
      <div 
        className="w-full flex flex-col space-y-10"
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' 
        }}
      >
        
        {/* MARQUEE 1 (Moves Left) */}
        <div className="relative w-full flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...images, ...images].map((src, index) => (
              <Polaroid key={`row1-${index}`} src={src} rotation={index % 2 === 0 ? 2 : -2} />
            ))}
          </div>
          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
            {[...images, ...images].map((src, index) => (
              <Polaroid key={`row1-duplicate-${index}`} src={src} rotation={index % 2 === 0 ? 2 : -2} />
            ))}
          </div>
        </div>

        {/* MARQUEE 2 (Moves Right) */}
        <div className="relative w-full flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...images, ...images].map((src, index) => (
              <Polaroid key={`row2-${index}`} src={src} rotation={index % 2 === 0 ? -2 : 2} />
            ))}
          </div>
          <div className="flex absolute top-0 animate-marquee2-reverse whitespace-nowrap">
            {[...images, ...images].map((src, index) => (
              <Polaroid key={`row2-duplicate-${index}`} src={src} rotation={index % 2 === 0 ? -2 : 2} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Single Polaroid Component
function Polaroid({ src, rotation }) {
  return (
    <div 
      className="inline-block mx-6 bg-white p-4 shadow-xl transition-transform hover:scale-110 hover:z-50 duration-300 transform-gpu"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        width: '320px',  
        height: '380px'
      }}
    >
      <div className="w-full h-[280px] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={src} 
          alt="Memory" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}