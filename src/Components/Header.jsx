import React from 'react';
// import '../styles/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="brand">
        <h1 className="grande-title">#GRANDE</h1>
        <h2 className="serene-subtitle">AT GODREJ SERENE</h2>
      </div>
      <div className="logo">
        <span className="godrej">Godrej</span>
        <span className="separator">|</span>
        <span className="properties">PROPERTIES</span>
      </div>
    </header>
  );
};

export default Header;