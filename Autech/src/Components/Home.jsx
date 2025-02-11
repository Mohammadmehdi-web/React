import React from 'react';
import './Home.css'; // Import external CSS
import Hero from './Hero.jsx';

function Home() {
  return (
    <>  <div className="home-container">
    <div className="home-banner">
      <h1>Welcome to Our Website</h1>
      <p>Experience the best services</p>
    </div>
  </div>
   <Hero/></>
  
  );
}

export default Home;
