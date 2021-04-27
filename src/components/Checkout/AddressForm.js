import React, { useState, useEffect } from "react";
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Grid,
	Typography,
	Container,
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

	/**
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * COUNTRY FETCHING LOGIC
	 */

	const countries = Object.entries(shippingCountries).map(([code, name]) => {
		return {
			id: code,
			label: name,
		};
	});

	const subdivisions = Object.entries(shippingSubdivisions).map(
		([code, name]) => {
			return {
				id: code,
				label: name,
			};
		}
	);

	const fetchShippingCountries = async checkoutTokenId => {
		const { countries } = await commerce.services.localeListShippingCountries(
			checkoutTokenId
		);
		console.log(countries);
		setShippingCountries(countries);
		setShippingCountry(Object.keys(countries)[0]);
	};
	/**COUNTRY FETCHING LOGIC
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * SUBDIVISION FETCHING LOGIC
	 */

	const fetchSubdivisions = async countryCode => {
		const { subdivisions } = await commerce.services.localeListSubdivisions(
			countryCode
		);
		setShippingSubdivisions(subdivisions);
		setShippingSubdivision(Object.keys(subdivisions)[0]);
	};

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id);
	}, []);

	useEffect(() => {
		if (shippingCountry) {
			fetchSubdivisions(shippingCountry);
		}
	}, [shippingCountry]);
	/**SUBDIVISION FETCHING LOGIC
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 *
	 */

	const methods = useForm();
	return (
		<Container>
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

						<Grid items xs={12} sm={6}>
							<InputLabel>Shipping Subdivision</InputLabel>
							<Select
								value={shippingSubdivision}
								fullWidth
								onChange={e => setShippingSubdivision(e.target.value)}
							>
								{subdivisions.map(subdivision => {
									return (
										<MenuItem key={subdivision.id} value={subdivision.id}>
											{subdivision.label}
										</MenuItem>
									);
								})}
							</Select>
						</Grid>
						{/*
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
		</Container>
	);
};

export default AddressForm;
