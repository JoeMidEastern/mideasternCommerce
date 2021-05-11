import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductOverlay from "./ProductOverlay/ProductOverlay";

const Product = ({ product, addProduct }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <Card
        className=" product-styled-border my-3"
        style={{
          width: "18rem",
          height: "30rem",
          border: "1px solid white",
        }}
      >
        <Card.Img
          variant="top"
          src={product.media.source}
          style={{ height: "18rem" }}
        />
        <Card.Body style={{ backgroundColor: "#012b36" }}>
          <Card.Title>
            <h6 className="truncated-desc">{product.name}</h6>
          </Card.Title>

          <Card.Text
            onClick={() => console.log("show description")}
            style={{
              textAlign: "center",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            className="my-3 showMoreBtn"
          >
            <ProductOverlay product={product} />
          </Card.Text>

          <Card.Text className="my-3 ml-auto">
            {product.price.formatted_with_symbol}
          </Card.Text>

          {product.inventory.available === 0 ? (
            <Button className="btn-block" variant="secondary" disabled>
              <i className="far fa-frown mr-3"></i>Out Of Stock
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "#fc010a" }}
              className="btn-block add-to-cart-btn"
              onClick={() => addProduct(product.id, 1)}
            >
              <i className="fas fa-arrow-circle-up"></i>
              <i className="fas fa-cart-plus mr-3"></i>Quick Add
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
