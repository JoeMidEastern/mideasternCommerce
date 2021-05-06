import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../../Product/Product";

const CAscreen = ({ products, fetchProductsByClassics, addProduct }) => {
  useEffect(() => {
    fetchProductsByClassics();
  }, []);
  return (
    <section>
      <Container className="my-3" style={{ textAlign: "center" }}>
        <h2>Classics & Antiques</h2>
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

export default CAscreen;
