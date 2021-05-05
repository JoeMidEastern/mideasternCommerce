import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { commerce } from "../../../../lib/commerce.js";
import Product from "../../../Product/Product";

const MiscScreen = ({ products, fetchProductsByMisc, addProduct }) => {
  useEffect(() => {
    fetchProductsByMisc();
  }, []);
  return (
    <Row>
      {products.map((product) => (
        <Col
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          sm={12}
          md={6}
          lg={4}
          xl={3}
        >
          <Product product={product} addProduct={addProduct} />
        </Col>
      ))}
    </Row>
  );
};
export default MiscScreen;
