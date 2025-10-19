import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About'; // Import the About component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About /> {/* Render the About section */}
      {/* Other sections will go here later */}
    </div>
  );
}

export default App;