import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import './Design1.js'
import './DrawPoster.js'
import Navbar from './Navbar.js';
import CustomDesign1 from './Design1.js';

function App() {

  return (
    <><Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CustomDesign1 />} />
        <Route path="/design1" element={<CustomDesign1 />} />
        {/* <Route path="/design2" element={<Design2 />} />
        <Route path="/design3" element={<Design3 />} />
        <Route path="/design4" element={<Design4 />} /> */}
      </Routes>
    </div>
  </Router></>
  );
}

export default App;
