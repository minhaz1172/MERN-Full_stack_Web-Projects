import React from 'react';
import related_product from '../Assets/Related_product';

import Item from "../Item/Item";

const Related_Products = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Related Products</h1>
      <hr style={{ width: '80%', height: '2px', backgroundColor: '#999', border: 'none', margin: '20px auto' }} />

      <div className="row g-4">
        {related_product.map((item, i) => {
          return (
            <div key={i} className="col-sm-6 col-md-4 col-lg-3">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Related_Products;
