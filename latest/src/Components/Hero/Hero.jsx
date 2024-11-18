import React from 'react'
import './Hero.css'
import hright from '../Assets/img2.png';
import hleft from '../Assets/img1.png';
import { FaArrowRight } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
<h2>New Arrivals Only</h2>
     
<div className="hand-icon">
  <p>New </p>
    <img src={hleft} alt ="" />
  
</div>
<p>Collection</p>
  <p>For EveryOne</p>
 <div className="hero-latest-btn">
 <button type="button" class="btn btn-danger   fw-bold">Latest Collections <span className='text-dark'><FaArrowRight /></span></button>
 
</div>

</div>
      <div className="hero-right">
        <img src ={hright}/>
      </div>
    </div>
  )
}

export default Hero