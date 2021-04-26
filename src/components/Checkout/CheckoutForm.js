import { Form, Row, Col, Button } from "react-bootstrap";

const CheckoutForm = ({
	user = {},
	handleChange,
	handleSubmit,
	handleSelectChange,
}) => {
	return (
		<>
			<Form onSubmit={handleSubmit} autoComplete="off">
				<Row>
					<Col sm={12} md={6} lg={4}>
						<Form.Group>
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								name="firstName"
								label="FirstName"
								value={user.firstName}
								placeholder="Enter First Name"
								onChange={handleChange}
								required
							/>
						</Form.Group>
					</Col>
					<Col sm={12} md={6} lg={4}>
						<Form.Group>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								name="lastName"
								label="LastName"
								value={user.lastName}
								placeholder="Enter Last Name"
								onChange={handleChange}
								required
							/>
						</Form.Group>
					</Col>
					<Col sm={12} md={6} lg={4}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								label="Email"
								value={user.email}
								onChange={handleChange}
								placeholder="Enter email"
								required
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={6} lg={4}>
						<Form.Group>
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								name="address"
								label="Address line 1"
								value={user.address}
								onChange={handleChange}
								placeholder="Enter Address"
								required
							/>
						</Form.Group>
					</Col>

					<Col sm={12} md={6} lg={4}>
						<Form.Group>
							<Form.Label>City</Form.Label>
							<Form.Control
								type="text"
								name="city"
								label="City"
								value={user.city}
								onChange={handleChange}
								placeholder="Enter City"
								required
							/>
						</Form.Group>
					</Col>

					<Col sm={12} md={6} lg={4}>
						<Form.Group>
							<Form.Label>Postal Code</Form.Label>
							<Form.Control
								type="text"
								name="postalCode"
								label="Zip / Postal Code"
								value={user.postCode}
								onChange={handleChange}
								placeholder="Enter Zip/Postal Code"
								required
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={6} lg={4}>
						<Form.Group>
							<Form.Label>Shipping Country</Form.Label>
							<Form.Control
								as="select"
								name="shippingCountry"
								labelId="shipping-country-select-label"
								value={user.shippingCountry.code || ""}
								onChange={e => handleSelectChange(e, "shippingCountries")}
							>
								<option>...Choose</option>
								{user.shippingCountries.map(country => {
									return (
										<option key={country.code} value={country.code}>
											{country.name}
										</option>
									);
								})}
							</Form.Control>
						</Form.Group>
					</Col>

					<Col sm={12} md={6} lg={4}>
						<Form.Group>
							<Form.Label>Shipping Subdivision</Form.Label>
							<Form.Control
								as="select"
								name="shippingSubdivision"
								labelId="shipping-subdivision-select-label"
								value={user.shippingSubdivision.code || ""}
								onChange={e => handleSelectChange(e, "shippingSubdivisions")}
							>
								{user.shippingSubdivisions.map(subdivision => {
									return (
										<option key={subdivision.code} value={subdivision.code}>
											{subdivision.name}
										</option>
									);
								})}
							</Form.Control>
						</Form.Group>
					</Col>

					<Col sm={12} md={6} lg={4}>
						<Form.Group>
							<Form.Label>Shipping Options</Form.Label>
							<Form.Control
								as="select"
								name="shippingOptions"
								labelId="shipping-options-select-label"
								value={user.shippingOptions.id}
								onChange={e => handleSelectChange(e, "shippingOptions")}
							>
								{user.shippingOptions.map(option => {
									return (
										<option key={option.id} value={option.id}>
											{`${option.description} (${option.price.formatted_with_symbol})`}
										</option>
									);
								})}
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
				<Button type="submit">Next</Button>
			</Form>
		</>
	);
};

export default CheckoutForm;
