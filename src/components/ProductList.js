import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.x.length > 0 ? (
    props.x.map((productitem, i) => {
      // "props.item" is the array coming from app.js (props.item.map = array.map)
      return (
        <Product
          productitem={productitem}
          key={i}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          index={i}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1> Please Add Product to Calculate</h1>
  );
}
