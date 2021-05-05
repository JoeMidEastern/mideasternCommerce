import React, { useState, useEffect } from "react";
import { commerce } from "../../../../lib/commerce.js";
import Product from "../../../Product/Product";

const CMTscreen = ({ products, fetchProductsByTrucks, addProduct }) => {
  useEffect(() => {
    fetchProductsByTrucks();
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
export default CMTscreen;
