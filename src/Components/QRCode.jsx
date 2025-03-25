import React from 'react';
// import '../styles/QRCode.css';

const QRCode = () => {
  return (
    <div className="qr-code-container">
      <img 
        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://godrejproperties.com" 
        alt="QR Code" 
        className="qr-code"
      />
    </div>
  );
};

export default QRCode;