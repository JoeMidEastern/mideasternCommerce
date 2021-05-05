import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MiscCategory = () => {
  return (
    <>
      <Card bg="dark">
        <Card.Body>
          <Card.Title>
            <h3 style={{ textAlign: "center", color: "#fff" }}>Misc & Other</h3>
          </Card.Title>
        </Card.Body>
        <Link to="/categories/misc">
          <Card.Img variant="top" src="/resources/img/misc/miscCategory.jpg" />
        </Link>
      </Card>
    </>
  );
};

export default MiscCategory;
