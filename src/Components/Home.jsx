import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavigationMenu from '../components/NavigationMenu';
import QRCode from '../components/QRCode';
import ContactForm from '../Components/Contactform';
import img1 from '../../public/godrej.jpg';

const Home = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(() => {
    // Initialize state from localStorage, default to false if not set
    return localStorage.getItem('contactFormOpen') === 'true';
  });

  const openContactForm = () => {
    setIsContactFormOpen(true);
    localStorage.setItem('contactFormOpen', 'true');
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
    localStorage.removeItem('contactFormOpen');
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <img 
        src={img1} 
        alt="Property Background" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 z-10">
        <Header />
        <NavigationMenu />
        <QRCode />
        
        <button 
          onClick={openContactForm}
          className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 z-20"
        >
          Contact Us
        </button>

        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={closeContactForm} 
        />
      </div>
    </div>
  );
};

export default Home;