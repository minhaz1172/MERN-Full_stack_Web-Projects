import React from 'react';

import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

function Popular() {
  return (
    <div className="popular container my-5">
      <h1 className="text-center mb-4">Most Popular Now</h1>
      <hr className="mb-4" />
      <div className="row">
        {data_product.map((item, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
