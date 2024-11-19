import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this import is included
import './Item.css';

function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-old-price">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Item;
