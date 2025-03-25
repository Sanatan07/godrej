import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/BlankPage.css';

const BlankPage = ({ title }) => {
  return (
    <div className="blank-page">
      <h1>{title}</h1>
      <p>This page is currently under development.</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default BlankPage;