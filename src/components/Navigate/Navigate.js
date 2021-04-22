import {
	Navbar,
	Nav,
	NavLink,
	Dropdown,
	NavItem,
	Badge,
	Container,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigate = ({ cartItems }) => {
	console.log("CART ITEMS === ", cartItems);
	return (
		<Navbar className="my-2" bg="dark" variant="dark" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand>
					<img
						src="/resources/img/ME.png"
						style={{ height: "auto", width: "14rem" }}
						className="ml-3"
					/>
				</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<LinkContainer to="/cart">
						<Nav.Link>
							<i className="fas fa-shopping-cart mr-3">
								<Badge
									className="px-1"
									style={{
										borderRadius: "50%",
									}}
									variant="light"
								>
									{cartItems}
								</Badge>
							</i>
							Cart
						</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/login">
						<Nav.Link>
							<i className="fa fa-user"></i>Sign In
						</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigate;
