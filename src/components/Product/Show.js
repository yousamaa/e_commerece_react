import React from "react";

const Show = (props) => {
  return (
    <div className="card mb-5">
      <div className="card-header">
        <p>Product Name :{props.product.name}</p>
      </div>
      <div className="card-body">
        <p>Product Price:{props.product.price}</p>
        <p>Product Description:{props.product.description}</p>
      </div>
    </div>
  );
};

export default Show;
