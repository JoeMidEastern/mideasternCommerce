import React, { useState, useEffect } from "react";
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken }) => {
	const [shippingCountries, setShippingCountries] = useState([]);
	const [shippingCountry, setShippingCountry] = useState("");
	const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
	const [shippingSubdivision, setShippingSubdivision] = useState("");
	const [shippingOptions, setShippingOptions] = useState([]);
	const [shippingOption, setShippingOption] = useState("");

	const countries = Object.entries(shippingCountries).map(([code, name]) => {
		return {
			id: code,
			label: name,
		};
	});

	const fetchShippingCountries = async checkoutTokenId => {
		const { countries } = await commerce.services.localeListShippingCountries(
			checkoutTokenId
		);
		console.log(countries);
		setShippingCountries(countries);
		setShippingCountry(Object.keys(countries));
	};

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id);
	}, []);

	const methods = useForm();
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit="">
					<Grid container spacing={3}>
						<CustomTextField required name="firstName" label="First name" />
						<CustomTextField required name="lastName" label="Last name" />
						<CustomTextField required name="address1" label="Address" />
						<CustomTextField required name="email" label="Email" />
						<CustomTextField required name="state" label="State" />
						<CustomTextField required name="city" label="City" />
						<CustomTextField required name="zipcode" label="ZipCode" />

						<Grid itemxs={12} sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select
								value={shippingCountry}
								fullWidth
								onChange={e => setShippingCountry(e.target.value)}
							>
								{countries.map(country => {
									return (
										<MenuItem key={country.id} value={country.id}>
											{country.label}
										</MenuItem>
									);
								})}
							</Select>
						</Grid>

						{/*}
						Grid itemxs={12} sm={6}>
							<InputLabel>Shipping Subdivisiooon</InputLabel>
							<Select value={} fullWidth onChange={}>
								<MenuItem key={} value={}>
									Select Me
								</MenuItem>
							</Select>
						</Grid>

						<Grid itemxs={12} sm={6}>
							<InputLabel>Shipping Options</InputLabel>
							<Select value={} fullWidth onChange={}>
								<MenuItem key={} value={}>
									Select Me
								</MenuItem>
							</Select>
	</Grid> */}
					</Grid>
				</form>
			</FormProvider>
		</>
	);
};

export default AddressForm;
