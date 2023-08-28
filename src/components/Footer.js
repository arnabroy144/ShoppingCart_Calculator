import React from "react";
import Product from "./Product";

export default function Footer(props) {
  return (
    <div className="row bottom">
    <div className="row " >
        <button type="button" class="btn btn-outline-dark bg-success col-6">
          Pay Now
        </button>
        <div className="col-6 bg-info text-center"> {"Total-  ₹ "+ props.y}</div>
      </div>

      <div className="row">
      <button type="button" class="btn btn-outline-dark bg-warning" onClick={()=>{
        props.resetQuantity()
        console.log()
      }}>Reset</button>
      </div>
    </div>
      
   
  );
}
