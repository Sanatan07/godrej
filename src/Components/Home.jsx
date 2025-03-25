import React from 'react';
import Header from '../components/Header';
import NavigationMenu from '../components/NavigationMenu';
import QRCode from '../components/QRCode';
import img1 from '../../public/godrej.jpg';

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image - Fullscreen with object-cover */}
      <img 
        src={img1} 
        alt="Property Background" 
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />
      
      {/* Content Layer - Positioned over background */}
      <div className="absolute inset-0 z-10">
        <Header />
        <NavigationMenu />
        <QRCode />
      </div>
    </div>
  );
};

export default Home;