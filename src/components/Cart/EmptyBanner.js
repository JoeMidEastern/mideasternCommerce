import { Modal, Button, Image } from "react-bootstrap";
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
          <Image
            className="mr-auto"
            style={{ width: "4rem", height: "auto" }}
            src="resources/img/WJ/wj_empty_banner.png"
          />
          <Link to="/">
            <Button variant="dark" style={{ backgroundColor: "#c74747" }}>
              Shopping
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};

export default EmptyBanner;
