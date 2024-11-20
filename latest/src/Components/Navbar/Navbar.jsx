import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/e-logo.jpg";
import { CiShoppingCart } from "react-icons/ci";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const { cartQuantity } = useContext(ShopContext); // Accessing cartQuantity from context

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo Section */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
          <span>Shopper</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mens">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/womens">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kids">
                Kids
              </Link>
            </li>
          </ul>
          {/* Cart and Login Section */}
          <div className="d-flex align-items-center">
            <Link className="btn btn-outline-primary me-3" to="/login">
              Log In
            </Link>
            {/* Cart Link with Badge */}
            <Link to="/cart" className="cart-link position-relative">
              <CiShoppingCart size={32} className="cart-icon" />
              {cartQuantity > 0 && (
                <span className="cart-badge position-absolute">{cartQuantity}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
