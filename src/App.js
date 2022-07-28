import './App.css';
import React from 'react';
// import ReactDOM from 'react-router-dom';
import NavBar from "./NavBar.js";
import {Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import Gallery from './Gallery.js';
import Dining from './Dining.js';
import Testimonials from './Testimonials.js';

function App() {
  return (
    <>
    
   
    <NavBar /> 
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Dining" element={<Dining />}/>
      <Route path="/Gallery" element={<Gallery />}/>
      <Route path="/Testimonials" element={<Testimonials />}/>
      <Route path="/Contact" element={<Contact />}/>
      </Routes>

  </>
  );
}

export default App;
