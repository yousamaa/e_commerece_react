import React from "react";
import { useState, useEffect } from "react";
import Show from './Show';

const Index = (props) => {
  const [toggle, setToggle] = useState(false);
  const [Id, setId] = useState(null);
  const [products, setProducts] = useState([]);
  const getData = () => {
    fetch("http://localhost:3000/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (id) => {
    setId(id);
    setToggle(true);
  };

  return (
    <div className="container">
      <h2>All Products </h2>
      {products.map((product, i) => {
        return (
          <div className="card mb-5">
            <div className="card-header">
              <p>Product Name :{product.name}</p>
            </div>
            <div className="card-body">
              <p>Product Price:{product.price}</p>
              <p>Product Description:{product.description}</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleClick(product.id)}
            >
            Show Product
            </button>
            {toggle && product.id === Id ? <Show product={product} /> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
