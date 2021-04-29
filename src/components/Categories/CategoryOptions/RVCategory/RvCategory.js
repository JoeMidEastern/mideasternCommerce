import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RvCategory = () => {
	return (
		<>
			<Card bg="dark">
				<Card.Body>
					<Card.Title>
						<h3 style={{ textAlign: "center", color: "#fff" }}>
							RV's & Accessories
						</h3>
					</Card.Title>
				</Card.Body>
				<Link to="/categories/rv">
					<Card.Img variant="top" src="/resources/img/rv/rvCategory.jpg" />
				</Link>
			</Card>
		</>
	);
};

export default RvCategory;
