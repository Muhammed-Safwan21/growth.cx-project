import React from "react";
import "./Footer.scss";
import { Button, Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <img
        className="img-fluid"
        src="https://growthcx-website-assets.s3.ap-south-1.amazonaws.com/commons/footer-desk.svg"
        alt=""
      />
      <div className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>
                Set the foundation for an <br /> aggressive growth
              </h1>
              <Button className="button">Hop on a call</Button>
            </Col>
          </Row>
          <Row className="footer-links">
            <Col md={3} className="vertical-center">
              <h5>Our fixes</h5>
              <a href="">
                <p>Team</p>
              </a>
              <a href="">
                <p>Expert</p>
              </a>
              <a href="">
                <p>Content</p>
              </a>
            </Col>
            <Col md={3} className="vertical-center">
              <h5>Community</h5>
              <a href="">
                <p>About Us</p>
              </a>
              <a href="">
                <p>Contact Us</p>
              </a>
              <a href="">
                <p>Privacy</p>
              </a>
              <a href="">
                <p>Terms</p>
              </a>
            </Col>
            <Col md={3} className="vertical-center">
              <h5>Resources</h5>
              <a href="">
                <p>Eye-Openers</p>
              </a>
              <a href="">
                <p>Buzz</p>
              </a>
            </Col>
            <Col md={3} className="vertical-center">
              <h5>Social</h5>
              <a href="">
                <p>LinkedIn</p>
              </a>
              <a href="">
                <p>Twitter</p>
              </a>
              <a href="">
                <p>Facebook</p>
              </a>
              <a href="">
                <p>Instagram</p>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>&copy; copyrights 2023 Growth.cx</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
