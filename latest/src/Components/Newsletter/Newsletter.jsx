import React from 'react'
import './newsletter.css'
function Newsletter() {
  return (
    <div className="newsletter container">
      <h1>Get Exclusive offers on Your Email</h1>
      <p>Subscribe to our newsletter</p>
        <div class="input-group w-75">
  <input type="email" class="form-control rounded-pill" placeholder="Enter Your Email" required />
  <button class="btn btn-success rounded-pill w-25" type="button">Button</button>
      </div>
    </div>
  )
}

export default Newsletter