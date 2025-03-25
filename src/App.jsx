import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import BlankPage from './Components/BlankPage';
import './App.css';
// import NavigationMenu from './Components/NavigationMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pune-route" element={<BlankPage title="LOCATION AV (PUNE ROUTE)" />} />
        <Route path="/walkthrough" element={<BlankPage title="WALKTHROUGH AV" />} />
        <Route path="/exterior" element={<BlankPage title="EXTERIOR AV" />} />
        <Route path="/interior" element={<BlankPage title="INTERIOR AV" />} />
        <Route path="/360-view" element={<BlankPage title="360° VIEW" />} />
        <Route path="/direction" element={<BlankPage title="GET DIRECTION" />} />
        <Route path="/brochure" element={<BlankPage title="BROCHURE" />} />
      </Routes>
    </Router>
  );
}

export default App;