import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js'
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className='App'>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;