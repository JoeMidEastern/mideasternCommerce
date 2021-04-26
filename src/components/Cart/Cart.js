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
import React, { useState, useEffect } from "react";
import EmptyBanner from "./EmptyBanner";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const Cart = ({
	cartData,
	updateProduct,
	handleEmptyCart,
	removeItemFromCart,
	totalCost,
}) => {
	const [showSpinner, setShowSpinner] = useState(true);

	const loading = () => {
		setTimeout(() => {
			setShowSpinner(false);
		}, 2000);
		if (showSpinner) {
			return <SpinnerLoader />;
		}
		return <EmptyBanner />;
	};

	if (!cartData.line_items || !cartData.line_items.length) return loading();

	return (
		<>
			<Row>
				<Col style={{ textAlign: "center" }} md={8}>
					<h1 className="my-3 p-1">Shopping Cart</h1>

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

					<Col>
						<Card className="my-3">
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h4>Total Cost: {totalCost}</h4>
								</ListGroup.Item>
								<ListGroup.Item>
									<Link to="/checkout">
										<Button type="button" className="btn-block my-4">
											Proceed To Checkout
										</Button>
									</Link>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
					<ListGroup.Item>
						<Col md={4}>
							<Button
								variant="danger"
								type="button"
								className="btn-block my-4"
								onClick={() => handleEmptyCart()}
							>
								Empty Cart
							</Button>
						</Col>
					</ListGroup.Item>
				</Col>
			</Row>
		</>
	);
};

export default Cart;
