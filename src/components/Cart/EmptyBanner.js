import { Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EmptyBanner = () => {
	return (
		<>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Your Cart Is Empty</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Click 'Shopping' Button To Add Items To Your Cart</p>
				</Modal.Body>

				<Modal.Footer>
					<Link to="/">
						<Button variant="dark">Shopping</Button>
					</Link>
				</Modal.Footer>
			</Modal.Dialog>
		</>
	);
};

export default EmptyBanner;
