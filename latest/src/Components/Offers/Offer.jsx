import React from 'react';
import exclusive from '../Assets/img5.png';
import './offer.css';
function Offer() {
  return (
    <div className="offers container ">
      <div className="row">
        {/* Left Section */}
        <div className="offers-left col-md-6 text-center ">
          <h1>Exclusive</h1>
          <h1>Offers for You</h1>
          <p>ONLY FOR BEST SELLER PRODUCTS</p>
          <button type="button" className="btn btn-warning">Grab Now</button>
        </div>

        {/* Right Section */}
        <div className="offers-right col-md-6 text-center">
          <img src={exclusive} alt="Exclusive Offers" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
