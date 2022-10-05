import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar, {
  HOME,
  APOD,
  ROVER,
  MEDIA,
} from '../components/NavBar/NavBar';
import HomeWrapper from '../components/layout/HomeWrapper/HomeWrapper';
import RoverWrapper from '../components/layout/RoverWrapper/RoverWrapper';
import ApodWrapper from '../components/layout/ApodWrapper/ApodWrapper';
import MediaWrapper from '../components/layout/MediaWrapper/MediaWrapper';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path={`/${HOME}`} element={<HomeWrapper />} />
        <Route path={`/${APOD}`} element={<ApodWrapper />} />
        <Route path={`/${ROVER}`} element={<RoverWrapper />} />
        <Route path={`/${MEDIA}`} element={<MediaWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
