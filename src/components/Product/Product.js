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
				<Card.Title style={{ height: "4rem" }}>{product.name}</Card.Title>
				<Card.Text>{product.price.formatted_with_symbols}</Card.Text>
				{/* <Card.Text>
					<div dangerouslySetInnerHTML={{ __html: product.description }} />
				</Card.Text> */}
				<Button variant="primary" onClick={() => addProduct(product.id, 1)}>
					<i className="fas fa-cart-plus"></i>Add To Cart
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;
