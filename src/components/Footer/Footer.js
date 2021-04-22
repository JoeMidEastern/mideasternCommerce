import { Container } from "react-bootstrap";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<Container>
			<footer className="mx-1 my-3">
				<p>All &copy; Rights Reserved To Mid Eastern Chrome Stop {year}</p>
			</footer>
		</Container>
	);
};

export default Footer;
