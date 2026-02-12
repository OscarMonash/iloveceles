"use client";

import { useEffect, useRef } from 'react';

export default function LoveLetter() {
  return (
    <div className="w-full py-20 px-4 flex justify-center items-center">
      <div className="relative max-w-2xl w-full bg-[#fffbf0] shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-8 md:p-12 rounded-sm rotate-1 hover:rotate-0 transition-transform duration-500">
        
        {/* Tape effect at top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200/50 backdrop-blur-sm rotate-2 shadow-sm" />

        <div className="font-handwriting text-gray-800 space-y-6 text-xl md:text-2xl leading-relaxed">
          
          {/* Date / Salutation */}
          <div className="flex justify-between items-end border-b-2 border-pink-100 pb-4 mb-8">
            <span className="text-pink-400 font-bold">February 12, 2026</span>
            <span className="text-3xl pl-4" >To my beautiful wonderful amazing celes,</span>
          </div>

          {/* THE LETTER BODY - WRITE YOUR HEART OUT HERE */}
          <p>
            Happy valentines day celeste, I really hope you like this page, I made it since I thought it would be a fun and different way to ask you this year
          </p>
          
          <p>
            Thank you so much for being with me and putting up with me when even sometimes I know I'm being a pain to deal with
          </p>

          <p>
            I love doing anything with you, whether its just going out to eat, going on a big date, or just staying in and cuddling, I always feel the happiest when its with you.
          </p>

          <p>
            I love you so so much beb and I hope this year treats us well and that we get to do everything we wanted to do with each other (and go on that trip)
          </p>

          <p>
            supa dupa love u
          </p>

          {/* Signature */}
          <div className="pt-8 text-right">
            <p className="text-pink-500 font-bold text-3xl">- oscar</p>
            <div className="text-4xl mt-2"></div>
          </div>

        </div>
      </div>
    </div>
  );
}