import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Page/header';
import Topbar from './Page/topbar';  
import Home from './Page/home';
import './App.css';
import Slider from './Page/Slider';
import IconCard from './Page/Iconcard';
import Service from './Page/Service';
import ServicesImage from './Page/ServicesImage';
import OurServices from './Page/OurServices';
import Whatwork from './Page/what_work';
import OurTeam from './Page/OurTeam';

function App() {
  return (
    <Router>
      <Topbar />
      <Header />
      <Slider/>
      <IconCard/>
      <Service/>
      <ServicesImage/>
      <OurServices/>
      <Whatwork/>
      <OurTeam/>
      <Routes>
        <Route path="/products" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
