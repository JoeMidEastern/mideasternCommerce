import {
	Row,
	Col,
	ListGroup,
	Button,
	Image,
	Form,
	Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({
	cartData,
	updateProduct,
	handleEmptyCart,
	removeItemFromCart,
}) => {
	if (!cartData.line_items || !cartData.line_items.length)
		return <h1>...LOADING</h1>;

	return (
		<>
			<Row>
				<Col md={8}>
					<h1>Shopping Cart</h1>
					<ListGroup variant="flush">
						{cartData.line_items.map(product => {
							return (
								<ListGroup.Item key={product.id}>
									<Row>
										<Col md={2}>
											<Image
												src={product.media.source}
												style={{ width: "8rem" }}
											/>
										</Col>
										<Col md={2}>
											<h5>{product.name}</h5>
										</Col>
										<Col md={2}>{product.price.formatted_with_code}</Col>
										<Col md={2}>
											<Button
												className="my-2 mx-3"
												type="button"
												variant="dark"
												onClick={() =>
													updateProduct(product.id, product.quantity + 1)
												}
											>
												<i className="fas fa-plus"></i>
											</Button>
										</Col>
										<Col md={2}>
											<Button
												className="my-2 mx-3"
												type="button"
												variant="dark"
												onClick={() =>
													updateProduct(product.id, product.quantity - 1)
												}
											>
												<i className="fas fa-minus"></i>
											</Button>
										</Col>
										<Col md={2}>
											<Button
												className="my-2 mx-3"
												variant="dark"
												onClick={() => {
													removeItemFromCart(product.id);
												}}
											>
												<i className="fas fa-trash"></i>
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							);
						})}
					</ListGroup>
					<Col md={4}>
						<Card className="my-3">
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h2>Subtotal: </h2>
								</ListGroup.Item>
								<ListGroup.Item>
									<Button type="button" className="btn-block">
										Proceed To Checkout
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Col>
			</Row>
		</>
	);
};

export default Cart;
