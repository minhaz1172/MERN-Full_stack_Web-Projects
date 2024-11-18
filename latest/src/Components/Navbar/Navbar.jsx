import React, { useState } from 'react'
 import './Navbar.css'
 import { Link } from 'react-router-dom'; 
 import logo from '../Assets/e-logo.jpg';
 import { CiShoppingCart } from "react-icons/ci";
function Navbar() {
  const [menu,setMenu]=useState('Shop')
  
  return (

    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" width='10%' />
        <p className='pt-3'>Shopper</p>
      </div>
       <ul className='nav-menu'>
        <li  onClick={()=>{setMenu('Shop')}}><Link to = '/'>Shop</Link>{menu==='Shop'?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu('men')}}><Link to ='mens'>Men</Link>{menu==='men'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('women')}}><Link to ='womens'>WOMEN</Link>{menu==='women'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}><Link to ='kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart mr-4 ml-3">
      <Link to ='/login'>  <button>LogIn</button> </Link>
        <Link to='/cart'><div className="card-icon">
          <CiShoppingCart size={24} />
          <span className="cart-count">0</span> 
        </div ></Link>

       </div>
       </div>
        
  )
}

export default Navbar