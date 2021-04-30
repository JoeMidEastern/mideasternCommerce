import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

/*
 *
 * You should fetch a list of categories from the SDK.
 * With that list, you should create a select dropdown or list that when selected calls the product api
 * filtering by the selected category.
 *
 */
const CategoryList = ({ products, categories, fetchCategories }) => {
  const data = categories.data;
  data.map((d) => {
    console.log(d.name);
  });
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  return (
    <Container fluid>
      <Row>
        {data.map((d) => {
          return (
            <Col
              lg={2}
              className="ml-auto mr-auto my-3"
              style={{ textAlign: "center" }}
            >
              <Link to={d.slug}>
                <h4>{d.name}</h4>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CategoryList;
