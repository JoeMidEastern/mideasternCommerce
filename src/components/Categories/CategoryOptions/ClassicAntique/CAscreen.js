import React, { useEffect } from "react";
import Product from "../../../Product/Product";

const CAscreen = ({ products, fetchProductsByClassics, addProduct }) => {
  useEffect(() => {
    fetchProductsByClassics();
  }, []);
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} addProduct={addProduct} />
        </div>
      ))}
    </>
  );
};

export default CAscreen;
