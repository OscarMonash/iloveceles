"use client";

import { useEffect, useState } from 'react';

// You can replace these URLs with your own images!
const images = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500",
  "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?q=80&w=500",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=500",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=500",
  "https://images.unsplash.com/photo-1511285560982-1351c4f88e5d?q=80&w=500",
  "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=500",
];

export default function PhotoGallery() {
  return (
    <div className="w-full py-20 overflow-hidden">
      
      {/* SECTION TITLE */}
      <h2 className="text-center text-white text-5xl font-bold mb-12 animate-pulse" 
          style={{ fontFamily: "'Dancing Script'", textShadow: '0 0 20px rgba(255,105,180,0.8)' }}>
        lovely chapters 
      </h2>

      {/* MARQUEE 1 (Moves Left) */}
      <div className="relative w-full flex overflow-hidden mb-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Double the images to create seamless loop */}
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
  );
}

// The Single Polaroid Card Component
function Polaroid({ src, rotation }) {
  return (
    <div 
      className="inline-block mx-6 bg-white p-4 shadow-xl transition-transform hover:scale-105 hover:z-10 duration-300"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        width: '280px',
        height: '340px'
      }}
    >
      {/* Image Container */}
      <div className="w-full h-[240px] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={src} 
          alt="Memory" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}