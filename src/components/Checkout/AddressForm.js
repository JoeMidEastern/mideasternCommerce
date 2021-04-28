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
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken, next }) => {
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

	const options = shippingOptions.map(sO => ({
		id: sO.id,
		label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
	}));

	const fetchShippingCountries = async checkoutTokenId => {
		const { countries } = await commerce.services.localeListShippingCountries(
			checkoutTokenId
		);

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

	/**SUBDIVISION FETCHING LOGIC
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
	 * SHIPPING OPTIONS FETCHING LOGIC
	 *
	 */

	const fetchShippingOptions = async (
		checkoutTokenId,
		country,
		region = null
	) => {
		const options = await commerce.checkout.getShippingOptions(
			checkoutTokenId,
			{ country, region }
		);

		setShippingOptions(options);
		setShippingOption(options[0].id);
	};
	//console.trace(fetchShippingOptions);

	/**SHIPPING OPTIONS FETCHING LOGIC
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 	useEffects


		

	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 * ##########################################################################
	 *
	 */

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id);
	}, []);

	useEffect(() => {
		if (shippingCountry) {
			fetchSubdivisions(shippingCountry);
		}
	}, [shippingCountry]);

	useEffect(() => {
		if (shippingSubdivision)
			fetchShippingOptions(
				checkoutToken.id,
				shippingCountry,
				shippingSubdivision
			);
	}, [shippingSubdivision]);

	const methods = useForm();
	return (
		<Container>
			<Typography variant="h6" gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(data =>
						next({
							...data,
							shippingCountry,
							shippingSubdivision,
							shippingOption,
						})
					)}
				>
					<Grid container spacing={6}>
						<CustomTextField required name="firstName" label="First name" />
						<CustomTextField required name="lastName" label="Last name" />
						<CustomTextField required name="address1" label="Address" />
						<CustomTextField required name="email" label="Email" />
						<CustomTextField required name="city" label="City" />
						<CustomTextField
							required
							name="zipcode"
							label="Zip / Postal code"
						/>
						<Grid item xs={12} sm={6}>
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
						<Grid item xs={12} sm={6}>
							<InputLabel>State / Shipping Subdivision</InputLabel>
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
						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Options</InputLabel>
							<Select
								value={shippingOption}
								fullWidth
								onChange={e => setShippingOption(e.target.value)}
							>
								{options.map(option => {
									return (
										<MenuItem key={option.id} value={option.label}>
											{option.label}
										</MenuItem>
									);
								})}
							</Select>
						</Grid>
					</Grid>
					<br />
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Link to="/cart">
							<Button variant="outlined">Back To Cart</Button>
						</Link>

						<Button type="submit" variant="contained">
							Continue
						</Button>
					</div>
				</form>
			</FormProvider>
		</Container>
	);
};

export default AddressForm;
