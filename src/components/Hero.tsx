import React, { useEffect, useRef } from 'react';
import { Play, UserPlus } from 'lucide-react';

const Hero = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cubeRef.current) {
        const rect = cubeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (e.clientY - centerY) / 10;
        const rotateY = (e.clientX - centerX) / 10;
        
        cubeRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-pulse">
              United Hacks V6
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              The Ultimate Global Online Hackathon - Code. Create. Compete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
                <Play size={20} />
                Watch Trailer
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25">
                <UserPlus size={20} />
                Register Now
              </button>
            </div>
          </div>

          {/* 3D Cube */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative perspective-1000">
              <div
                ref={cubeRef}
                className="cube-container transition-transform duration-100 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="cube">
                  <div className="cube-face cube-front"></div>
                  <div className="cube-face cube-back"></div>
                  <div className="cube-face cube-right"></div>
                  <div className="cube-face cube-left"></div>
                  <div className="cube-face cube-top"></div>
                  <div className="cube-face cube-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;