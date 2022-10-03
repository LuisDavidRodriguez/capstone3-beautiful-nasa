import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import HomeWrapper from '../components/layout/HomeWrapper/HomeWrapper';
import RoverWrapper from '../components/layout/RoverWrapper/RoverWrapper';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/Home" element={<HomeWrapper />} />
        <Route path="/Rover" element={<RoverWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
