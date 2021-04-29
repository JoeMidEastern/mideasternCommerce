import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CommercialTrucks = () => {
	return (
		<>
			<Card bg="dark">
				<Card.Body>
					<Card.Title>
						<h3 style={{ textAlign: "center", color: "#fff" }}>
							Commercial Trucks
						</h3>
					</Card.Title>
				</Card.Body>
				<Link to="/categories/commercialtrucks">
					<Card.Img variant="top" src="/resources/img/truck/CTcategory.jpg" />
				</Link>
			</Card>
		</>
	);
};

export default CommercialTrucks;
