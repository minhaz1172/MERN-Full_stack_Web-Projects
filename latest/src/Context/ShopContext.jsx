import { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_dta"; // Ensure the path is correct

export const ShopContext = createContext(null);

// Initialize the cart with default values
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

   // Calculate the total number of items in the cart
   const cartQuantity = Object.values(cartItems).reduce((total, qty) => total + qty, 0);

  // Debug to ensure cart is initialized correctly
  useEffect(() => {
    console.log("Initial Cart:", cartItems);
  }, []);

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] + 1,
    }));
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] - 1,
    }));
  };

  const contextValue = { all_product,cartQuantity, cartItems, addToCart, removeFromCart };





  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
