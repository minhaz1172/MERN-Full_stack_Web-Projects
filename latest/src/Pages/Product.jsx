import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; // Ensure this is imported
import { ShopContext } from '../Context/ShopContext';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Related_Products from '../Components/Related_Products/Related_Products';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Check if productId matches with products in the list
  const product = all_product.find((e) => e.id === Number(productId)); 

  // Check if product exists
  

  return (
    <div>
  <BreadCrum product={product} />
  <ProductDisplay product={product} />
  <Related_Products />
  </div>
  )
}

export default Product;
