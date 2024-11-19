import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const BreadCrum = (product ) => {
  if (!product) return null; // Safety check for undefined product

  return (
    <div>
      Home <FaArrowRight /> Shop <FaArrowRight /> {product.category} <FaArrowRight /> {product.name}
    </div>
  );
};

export default BreadCrum;
