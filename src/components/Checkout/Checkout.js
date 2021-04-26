import { Container, Form, Row, Col } from "react-bootstrap";
import { commerce } from "../../lib/commerce";
import React, { useState, useEffect } from "react";
import CheckoutForm from "./CheckoutForm";

const Checkout = ({ cartData }) => {
	const [user, setUser] = useState({
		city: "",
		email: "",
		postalCode: "",
		lastName: "",
		firstName: "",
		shippingOption: {},
		shippingOptions: [],
		shippingCountry: {},
		shippingCountries: [],
		shippingSubdivision: {},
		shippingSubdivisions: [],
	});

	const [checkoutData, setCheckoutData] = useState({});
	const handleChange = e => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSelectChange = (e, state) => {
		const { name, value } = e.target;
		if (state === "shippingOptions") {
			setUser({
				...user,
				[name]: {
					id: value,
				},
			});
		} else {
			setUser({
				...user,
				[name]: {
					name: user[state].find(country => country.code === value).name,
					code: value,
				},
			});
		}
	};

	const handleSubmit = e => e.preventDefault();

	useEffect(() => {
		if (cartData.id) {
			const generateToken = async () => {
				try {
					const response = await commerce.checkout.generateToken(cartData.id, {
						type: "cart",
					});
					setCheckoutData(response);
				} catch (error) {
					console.log("CHECKOUT ERROR =====> ", error);
				}
			};
			generateToken();
		}
	}, [cartData]);

	return (
		<Container>
			<h1>Checkout</h1>
			<CheckoutForm
				user={user}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleSelectChange={handleSelectChange}
			/>
		</Container>
	);
};

export default Checkout;
