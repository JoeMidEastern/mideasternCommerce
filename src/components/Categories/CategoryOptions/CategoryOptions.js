import { Container, Row, Col } from "react-bootstrap";
import CommercialTrucks from "./CommercialTrucks/CommercialTrucks";
import ClassicAntique from "./ClassicAntique/ClassicAntique";
import RvCategory from "./RVCategory/RvCategory";

const CategoryOptions = () => {
  return (
    <section style={{ marginTop: "3rem" }}>
      <Container fluid>
        <Row>
          <Col sm={true} lg={true}>
            <CommercialTrucks />
          </Col>
          <Col sm={true} lg={true}>
            <ClassicAntique />
          </Col>
          <Col sm={true} lg={true}>
            <RvCategory />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CategoryOptions;
