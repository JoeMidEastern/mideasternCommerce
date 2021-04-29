import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClassicAntique = () => {
	return (
		<>
			<Card bg="dark">
				<Card.Body>
					<Card.Title>
						<h3 style={{ textAlign: "center", color: "#fff" }}>
							Classics & Antiques
						</h3>
					</Card.Title>
				</Card.Body>
				<Link to="/categories/classicsandantiques">
					<Card.Img
						variant="top"
						src="/resources/img/classic/classicCategory.jpg"
					/>
				</Link>
			</Card>
		</>
	);
};

export default ClassicAntique;
