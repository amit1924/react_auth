import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Arsh from "../assets/arsh.jpg";
import Arsha from "../assets/arsh1.jpg";
import Arshb from "../assets/arsh2.jpg";

const Home = () => {
  return (
    <Container fluid className="bg-black">
      <Row>
        <Col xs={12} sm={10} md={8} lg={6} xl={4} className="mx-auto">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                src={Arsh}
                className="d-block w-100 h-100"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>I am so cool</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img src={Arsha} className="d-block w-100" alt="Second slide" />
              <Carousel.Caption>
                <h3>I am favorite of my family</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Arshb}
                className="d-block w-100 h-100"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>I always smile</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
