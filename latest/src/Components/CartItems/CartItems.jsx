import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { CiCircleRemove } from "react-icons/ci";

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  // State for promo code and discount
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shippingFee = 10; // Flat shipping fee

  // Calculate subtotal
  const subtotal = all_product.reduce((total, product) => {
    const quantity = cartItems[product.id] || 0; // Default to 0 if undefined
    const price = product.new_price || 0; // Default to 0 if undefined
    return total + price * quantity;
  }, 0);
  


  // Apply promo code
  const applyPromoCode = () => {
    if ( promoCode === "DISCOUNT10") {
      setDiscount(0.1 * subtotal); // 10% discount
    }else if (promoCode==='Minhaz123'){
      setDiscount(0.2 * subtotal); //20%
    }else {
      setDiscount(0);
      alert("Invalid Promo Code");
    }
  };

  const total = subtotal - discount + shippingFee;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      <div className="row bg-light py-2 fw-bold">
        <div className="col-2">Product</div>
        <div className="col-3">Title</div>
        <div className="col-2">Price</div>
        <div className="col-2">Quantity</div>
        <div className="col-2">Total</div>
        <div className="col-1">Remove</div>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div className="row align-items-center py-2" key={product.id}>
              <div className="col-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid rounded"
                  style={{ maxWidth: "80px" }}
                />
              </div>
              <div className="col-3">{product.name}</div>
              <div className="col-2">${product.new_price.toFixed(2)}</div>
              <div className="col-2 d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary btn-sm me-2"
                  onClick={() => removeFromCart(product.id)}
                >
                  -
                </button>
                <span className="fw-bold">{cartItems[product.id]}</span>
                <button
                  className="btn btn-outline-secondary btn-sm ms-2"
                  onClick={() => addToCart(product.id)}
                >
                  +
                </button>
              </div>
              <div className="col-2">
                ${ (product.new_price * cartItems[product.id]).toFixed(2) }
              </div>
              <div className="col-1">
                <CiCircleRemove
                  size={24}
                  className="text-danger cursor-pointer"
                  onClick={() => removeFromCart(product.id)}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <hr />
      {/* Subtotal, Promo Code, Shipping, and Total Section */}
      <div className="row">
        <div className="col-md-6 offset-md-6">
          <div className="d-flex justify-content-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Shipping Fee:</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Discount:</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button
              className="btn btn-outline-success w-100"
              onClick={applyPromoCode}
            >
              Apply Promo Code
            </button>
          </div>
          <a href="/checkout" className="btn btn-primary w-100 mt-3">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
