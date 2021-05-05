import { Container, Row, Col } from "react-bootstrap";
import CommercialTrucks from "./CommercialTrucks/CommercialTrucks";
import ClassicAntique from "./ClassicAntique/ClassicAntique";
import RvCategory from "./RVCategory/RvCategory";
import MiscCategory from "./Misc/MiscCategory";

const CategoryOptions = () => {
  return (
    <section style={{ marginTop: "3rem" }}>
      <Container fluid>
        <Row>
          <Col className="my-3" sm={true} lg={true}>
            <CommercialTrucks />
          </Col>
          <Col className="my-3" sm={true} lg={true}>
            <ClassicAntique />
          </Col>
          <Col className="my-3" sm={true} lg={true}>
            <RvCategory />
          </Col>
          <Col className="my-3" sm={true} lg={true}>
            <MiscCategory />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CategoryOptions;
