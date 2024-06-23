import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import phoneIcon from '../assets/img/phoneIcon.png';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} sm={6}>
          <iframe  
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.2970104475094!2d150.9641222!3d-33.830450299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd523ff3a733%3A0xcbd8a78ff0b45b79!2s29%20Yoogali%20St%2C%20Merrylands%20NSW%202160%2C%20Australia!5e0!3m2!1sen!2s!4v1719044997717!5m2!1sen!2s" 
            width="100%" 
            height="300"  
            allowfullscreen=""
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
            className="map-iframe"
            />
        </Col>
        <Col xs={12} sm={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Wanna get in touch? <br/>Reach out at:</h2>
                <div className="navbar-text" style={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                  <a href="https://maps.app.goo.gl/4KZePCm9jgeiS3pS9" target="_blank" style={{ textDecoration: "none", color: "white", marginBottom: "10px" }} rel="noreferrer">
                    <h5 style={{ margin: 0 }}>
                      Address: <span style={{ textDecoration: "none", transition: "border-bottom-color 0.3s", borderBottom: "1px solid white" }}>29 Yoogali St, Merrylands NSW 2160, Australia</span>
                    </h5>
                  </a>
                <h5>Email: contact@dandytints.com</h5>
                <h5>Contact: +61455121312</h5> 

                  <div className="social-icon">
                    <a href="https://www.facebook.com/dandytints" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/dandytints" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                    <a href="tel:61455121312" target="blank" rel="noreferrer"><img src={phoneIcon} alt="Call 61455121312" /></a>
                  </div>
                  
                </div>
              </div>
            }
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
