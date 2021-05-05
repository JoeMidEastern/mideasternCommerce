import { Carousel } from "react-bootstrap";

const interval = 2000;

const CarouselHome = () => {
  return (
    <Carousel
      fade
      /* style={{ position: "relative", width: "100%", height: "auto" }} */
    >
      <Carousel.Item interval={interval}>
        <img
          style={{
            overFlow: "hidden",
            width: "100%",
            height: "500px",
            display: "block",
            objectFit: "cover",
            margin: "0 auto",
          }}
          className="d-block w-100"
          src="/resources/img/classic/classic1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={interval}>
        <img
          style={{
            overFlow: "hidden",
            width: "100%",
            height: "500px",
            display: "block",
            objectFit: "cover",
            margin: "0 auto",
          }}
          className="d-block w-100"
          src="/resources/img/classic/classic2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={interval}>
        <img
          style={{
            overFlow: "hidden",
            width: "100%",
            height: "500px",
            display: "block",
            objectFit: "cover",
            margin: "0 auto",
          }}
          className="d-block w-100"
          src="/resources/img/classic/classic3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
