import React from 'react'
import ExampleImage from '.././images/4.jpg'
function Hero(images,data) {
  return (
    <>   <div className="container mt-5">
    <div className="row align-items-center text-center text-md-start">
      {/* First Column */}
      <div className="col-md-6">
        <h2 className="text-primary">Welcome to Our Website</h2>
        <h1>Version 2 branch </h1>
        <p className="text-muted">
          Explore our services and get the best experience. We provide high-quality solutions tailored for you.
        </p>
      </div>
      {/* Second Column */}
      <div className="col-md-6">
        <img src={ExampleImage} alt="Example" className="img-fluid rounded shadow" />
      </div>
    </div>
  </div></>
 
  )
}

export default Hero