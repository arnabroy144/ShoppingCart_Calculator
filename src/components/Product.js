import React from "react";

export default function Product(props) {
  console.log(props);

  return (
    <div className="row">
      <div className="jumbotron">
        <h1 className="display-4">{props.productitem.name}</h1>
      </div>

      {/* <div className="col-4">
        <h2>{props.productitem.name} </h2>
      </div> */}

      <div className="col-3">
        <h2>
          <span class="badge bg-secondary">
            {"Rate ₹ " + props.productitem.price}
          </span>
        </h2>
      </div>

      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-primary">
            {props.productitem.quantity}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-3">
        <h2>
          <span class="badge bg-secondary">
            {"₹ " + props.productitem.price * props.productitem.quantity}
          </span>
        </h2>
      </div>

      <div className="col-2">
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
      <hr className="my-4" />
    </div>
  );
}
