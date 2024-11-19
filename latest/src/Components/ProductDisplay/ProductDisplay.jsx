import React from 'react';
import './ProductDisplay.css';
import { FaStar } from 'react-icons/fa6';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { CiStar } from 'react-icons/ci';

const ProductDisplay = (props) => {
  const { product } = props;
  let tags = [];
  if (product.category === 'men') {
    tags = ['Men', 'Fashion', 'Luxury'];
  } else if (product.category === 'women') {
    tags = ['Women', 'Style', 'Elegance'];
  } else if (product.category === 'kids') {
    tags = ['Kids', 'Playful', 'Comfort'];
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6 d-flex">
          <div className="d-flex flex-column me-3">
            <img className="mb-2 img-thumbnail" src={product.image} alt={product.name} />
            <img className="mb-2 img-thumbnail" src={product.image} alt={product.name} />
            <img className="mb-2 img-thumbnail" src={product.image} alt={product.name} />
            <img className="mb-2 img-thumbnail" src={product.image} alt={product.name} />
          </div>
          <div className="w-100">
            <img className="img-fluid border" src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <h1 className="fw-bold">{product.name}</h1>
          <div className="d-flex align-items-center mt-2">
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaStar className="text-warning" />
            <FaRegStarHalfStroke className="text-warning" />
            <CiStar className="text-secondary" />
            <p className="ms-2 mb-0">(122)</p>
          </div>
          <div className="mt-3">
            <div className="productdisplay-price-old text-muted" style={{ fontSize: '1.25rem' }}>
              ${product.old_price}
            </div>
            <div className="text-success fw-bold" style={{ fontSize: '1.5rem' }}>
              ${product.new_price}
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem nostrum mollitia voluptatibus, quidem laudantium magnam ut praesentium molestias, quis.
          </p>
          <div className="mt-4">
            <h4>Select Size</h4>
            <div className="d-flex gap-3 mt-2">
              <button className="btn btn-outline-primary">S</button>
              <button className="btn btn-outline-primary">M</button>
              <button className="btn btn-outline-primary">L</button>
              <button className="btn btn-outline-primary">XL</button>
              <button className="btn btn-outline-primary">XXL</button>
            </div>
          </div>
          <button className="btn btn-primary mt-4">ADD TO CART</button>
         {/* Tags Section */}
         <p className="mt-3">
            Tags: <span>{tags.join(', ')}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;