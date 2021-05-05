import { Card, Button } from "react-bootstrap";

const Product = ({ product, addProduct }) => {
  return (
    <div>
      <Card
        className=" product-styled-border my-3"
        style={{ width: "18rem", height: "30rem", border: "1px solid white" }}
      >
        <Card.Img
          variant="top"
          src={product.media.source}
          style={{ height: "18rem" }}
        />
        <Card.Body>
          <Card.Title>
            <h6 className="truncated-desc">{product.name}</h6>
          </Card.Title>

          <Card.Text className="my-3">
            {product.price.formatted_with_symbol}
          </Card.Text>

          {product.inventory.available === 0 ? (
            <Button className="btn-block" variant="secondary" disabled>
              <i className="far fa-frown mr-3"></i>Out Of Stock
            </Button>
          ) : (
            <Button
              className="btn-block add-to-cart-btn"
              variant="primary"
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
