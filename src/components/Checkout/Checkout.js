import { Container } from "react-bootstrap";
import {
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	CircularProgress,
	Divider,
	Button,
} from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import React, { useState, useEffect } from "react";
import CheckoutForm from "./CheckoutForm";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cartData }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [checkoutToken, setCheckoutToken] = useState(null);

	useEffect(() => {
		const generateToken = async () => {
			try {
				const token = await commerce.checkout.generateToken(cartData.id, {
					type: "cart",
				});
				console.log(token);
				setCheckoutToken(token);
			} catch (error) {
				console.log("ERROR ==> ", error);
			}
		};
		generateToken();
	}, []);

	const PForm = () =>
		activeStep === 0 ? (
			<AddressForm checkoutToken={checkoutToken} />
		) : (
			<PaymentForm />
		);
	return (
		<Container>
			<Paper style={{ margin: "3rem 0" }}>
				<Typography style={{ marginTop: "3rem" }} variant="h4" align="center">
					Checkout
				</Typography>
				<Stepper activeStep={activeStep}>
					{steps.map(step => (
						<Step key={step}>
							<StepLabel>{step}</StepLabel>
						</Step>
					))}
				</Stepper>
				{activeStep === steps.length ? (
					<Confirmation />
				) : (
					checkoutToken && <PForm />
				)}
			</Paper>
		</Container>
	);
};

export default Checkout;
