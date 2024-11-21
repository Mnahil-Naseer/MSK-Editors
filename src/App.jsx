import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'
import Contact from './components/Contact';
import PlaceOrder from './components/PlaceOrder';
import Project from './components/Project';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about-us' element={<AboutUs/>}/>
        <Route path='contact-us' element={<Contact/>}/>
        <Route path="placeorder" element={<PlaceOrder />} />
        <Route path="project" element={<Project />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
