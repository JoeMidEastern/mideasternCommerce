import { Row, Col, Container } from "react-bootstrap";
import Product from "../Product/Product";
import CarouselHome from "../CarouselHome/CarouselHome";

const Products = ({ products, addProduct }) => {
	return (
		<>
			<CarouselHome />
			<Container className="my-3">
				<Row>
					{products.map(product => (
						<Col
							style={{ display: "flex", justifyContent: "center" }}
							key={product.id}
							sm={12}
							md={6}
							lg={4}
							xl={3}
						>
							<Product product={product} addProduct={addProduct} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Products;
