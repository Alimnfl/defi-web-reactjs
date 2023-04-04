import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/navbar/Navbar';
import './index.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Developer from './components/developer/Developer';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
