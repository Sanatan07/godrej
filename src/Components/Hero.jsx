import React from 'react';
import img1 from '../assets/godrej.jpg'

const GodrejPropertiesHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Full screen and responsive */}
      <img 
        src={img1} 
        alt="Godrej Serene Property" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Content Layer - Ensure it's above the background image */}
      <div className="relative z-10">
        {/* Header Overlay with Grande Logo - Responsive positioning */}
        <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-8 md:left-12">
          <div className="flex flex-col">
            {/* Logo placeholder for top left (Grande logo) */}
            <div className="mb-2">
              <img 
                src="/api/placeholder/160/60" 
                alt="Grande Logo" 
                className="h-8 sm:h-10 md:h-12"
              />
            </div>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">#GRANDE</h1>
            <h2 className="text-white text-lg sm:text-xl md:text-2xl">AT GODREJ SERENE</h2>
          </div>
        </div>
        
        {/* Godrej Properties Logo - Responsive positioning */}
        <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-8 md:right-12">
          {/* Logo placeholder for top right (Godrej Properties logo) */}
          <div className="mb-2">
            <img 
              src="/api/placeholder/180/60" 
              alt="Godrej Properties Logo" 
              className="h-8 sm:h-10 md:h-12"
            />
          </div>
          <div className="text-white text-xl sm:text-xl md:text-2xl font-bold flex items-center justify-end">
            <span className="italic mr-2">Godrej</span> | PROPERTIES
          </div>
        </div>
        
        {/* Navigation Menu - Responsive width and hidden on smaller screens */}
        <div className="absolute left-0 top-1/3 md:top-1/4 w-full md:w-64 lg:w-80">
          <div className="hidden md:block">
            {[
              "LOCATION AV (PUNE ROUTE)",
              "WALKTHROUGH AV",
              "EXTERIOR AV",
              "INTERIOR AV",
              "360° VIEW",
              "GET DIRECTION",
              "BROCHURE"
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-purple-600 bg-opacity-80 text-white py-3 md:py-4 px-4 md:px-6 mb-1 cursor-pointer hover:bg-opacity-100 transition-all"
              >
                {item}
              </div>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden absolute top-36 left-4">
            <button className="bg-purple-600 bg-opacity-80 text-white p-3 rounded-md">
              Menu
            </button>
          </div>
        </div>
        
        {/* Club Area - Responsive positioning */}
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 md:left-1/3 transform -translate-y-1/2">
          <div className="text-white">
            <div className="text-lg sm:text-xl md:text-2xl">the</div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">club</div>
          </div>
        </div>
        
        {/* QR Code - Responsive sizing */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-4 sm:right-8 md:right-12 bg-white p-2 sm:p-3">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gray-800 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-26 sm:h-26 md:w-32 md:h-32 grid grid-cols-8 grid-rows-8">
              {Array(64).fill().map((_, i) => (
                <div key={i} className={`w-full h-full ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Site Image Notice - Responsive text size */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-4 sm:left-5 md:left-6 text-white text-xs sm:text-sm opacity-70">
          *an actual site image
        </div>
      </div>
    </div>
  );
};

export default GodrejPropertiesHero;