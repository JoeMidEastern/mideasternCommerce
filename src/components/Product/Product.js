import { Card, Button } from "react-bootstrap";

const Product = ({ product, addProduct }) => {
	return (
		<Card style={{ width: "18rem", height: "30rem" }}>
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

				<Button
					className="btn-block"
					variant="primary"
					onClick={() => addProduct(product.id, 1)}
				>
					<i className="fas fa-cart-plus mr-3"></i>Add To Cart
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;
