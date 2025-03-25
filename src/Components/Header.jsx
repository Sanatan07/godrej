import React from 'react';
import logo1 from '../../public/godrejlogo.png';
import logo2 from '../../public/logo2.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 pointer-events-none">
      <div className="absolute top-4 left-4">
        <img 
          src={logo1} 
          alt="Grande at Godrej Serene" 
          className="h-16 w-auto object-contain"
        />
      </div>
      <div className="absolute top-4 right-4">
        <img 
          src={logo2} 
          alt="Godrej Properties" 
          className="h-16 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;