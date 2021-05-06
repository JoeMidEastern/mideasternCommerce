import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { commerce } from "../../../../lib/commerce.js";
import Product from "../../../Product/Product";

const CMTscreen = ({ products, fetchProductsByTrucks, addProduct }) => {
  useEffect(() => {
    fetchProductsByTrucks();
  }, []);
  return (
    <section>
      <Container className="my-3" style={{ textAlign: "center" }}>
        <h2>Commercial Trucks</h2>
      </Container>
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
    </section>
  );
};
export default CMTscreen;
