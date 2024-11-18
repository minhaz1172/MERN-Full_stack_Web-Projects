import React from 'react'
import new_product from '../Assets/New_Collection'
import Item from '../Item/Item'
function NewCollection() {
  return (
    <div className="new-collection container">
      <h1>New Collection</h1>
      <hr/>
      <div className="row">
        {new_product.map((item, i) => (
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
  )
}

export default NewCollection;