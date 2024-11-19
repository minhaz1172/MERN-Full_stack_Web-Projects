import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { IoIosArrowDropdown } from "react-icons/io";
import Item from "../Components/Item/Item";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="container">
      {/* Banner Section */}
      <div className="shop-category mb-4">
        <img
          src={props.banner}
          alt="Shop Banner"
          className="img-fluid rounded"
        />
      </div>

      {/* Sorting Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
      <p className="mb-0">Showing {props.category} Products</p>
        <div className="d-flex align-items-center">
          <span className="me-2">Sort by</span>
          <IoIosArrowDropdown />
        </div>
      </div>

      {/* Products Section */}
      <div className="row">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div className="col-md-4 mb-4" key={i}>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default ShopCategory;
