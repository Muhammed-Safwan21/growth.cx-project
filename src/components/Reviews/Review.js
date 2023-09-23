import React from "react";
import "./Review.scss";
import Vectorup from './Vectorup.png'
import { Col, Container, Row, Carousel } from "react-bootstrap";

const testimonials = [
  {
    name: "Harish Kumar",
    companyLogo: "/images/CrawlQ.ai.png",
    image: "/images/harish.png",
    position: " CEO & Founder CrawlQ.ai",
    text: "Team growth.cx did a great job in helping us revamp our website to make it stand on par with global SaaS brands which turned our Appsumo campaign into a huge success.",
    services: ["GTM Consulting", "Growth Marketing", "Design"],
  },
  {
    name: "Chayan Mukherjee ",
    companyLogo: "/images/quandle.png",
    image: "/images/chayan.png",
    position: "CEO & Founder, Qandle",
    text: "As a growth marketing partner, the impact growth.cx creates is tremendous. Organic traffic was something we really wanted to multiply. They just came in and took it to another level in just 3 months.",
    services: ["GTM Consulting", "Growth Marketing", "Design"],
  },
  {
    name: "Gaurav Bhawnani Founder,",
    companyLogo: "/images/superbeings.png",
    image: "/images/gourav.png",
    position: " SuperBeings",
    text: "We were looking for a highly passionate and creative team who could help us create a new look for our website and rewrite content to align with the new product positioning and growth.cx fit the bill perfectly.",
    services: ["GTM Consulting", "Growth Marketing", "Design"],
  },
  {
    name: "Rakesh Boddu ",
    companyLogo: "/images/appveen.png",
    image: "/images/rakesh.png",
    position: "Product Marketing Manager, Appveen",
    text: "They are a very dedicated team and one can very easily rely on them to deliver successful outcomes.",
    services: ["Brand Repositioning", "Content Creation", "SEO", "Web UI/UX"],
  },
];

const Review = () => {
  return (
    <Container className="review">
      <div className="d-md-none p-2">
        <Carousel className="carousel mx-auto">
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Row>
                <img
                  className="mt-2"
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{ width: "80px", height: "70px" }}
                />

                <Col>
                  <img src={testimonial.companyLogo} alt={testimonial.name} />
                  <br />
                  <b>
                    {testimonial.name}
                    <br />
                    {testimonial.position}
                  </b>
                </Col>
              </Row>
              <Row>
                <p className="fill-space">{testimonial.text}</p>
              </Row>
              <Row>
                <div className="services">
                  <b>Services provided :</b>
                  <br />
                  {testimonial.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-box">
                      {service}
                    </div>
                  ))}
                </div>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="d-none d-md-block">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial mb-5 p-3 col-md-6 ${index % 2 === 0 ? "testimonial-background-even"
            : "testimonial-background-odd"}`}>
            <div>
              <Row>
                {index % 2 === 0 ? (
                  <>
                    <Col className="order-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="img-fluid"
                      />
                  
                        <img src={Vectorup} alt="vector" className="vector-up"/>
                      
                    </Col>
                    <Col sm={8} className="order-1">
                      <img
                        src={testimonial.companyLogo}
                        alt={testimonial.name}
                      />
                      <h6 className="mt-3">
                        {testimonial.name}
                        <br />
                        {testimonial.position}
                      </h6>
                      <p>{testimonial.text}</p>
                      <div className="services">
                        {testimonial.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="service-box">
                            {service}
                          </div>
                        ))}
                      </div>
                      
                    </Col>
                  </>
                ) : (
                  <>
                     <div className="vector-down"></div>
                    <Col>
                
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="img-fluid"
                      />
                      
                    </Col>
                      
                    <Col sm={8} >
                    
                     
                      <img
                        src={testimonial.companyLogo}
                        alt={testimonial.name}
                      />
                       <h6 className="mt-3">
                        {testimonial.name}
                        <br />
                        {testimonial.position}
                      </h6>
                      <p>{testimonial.text}</p>
                      <div className="services">
                        {testimonial.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="service-box">
                            {service}
                          </div>
                        ))}
                      </div>
      
                    </Col>
                  </>
                )}
              </Row>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Review;
