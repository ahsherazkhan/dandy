import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Style", "Persona", "Class" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <section className="banner" id="home" style={{ backgroundColor: "black",  height: "1000px" }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div style={{display:"flex",flexDirection:"column"}}>
                <div>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Ready to Tint?`}</h1>
                <h2>{`Elevate your car's`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Style", "Persona", "Class" ]'><span className="wrap">{text}</span></span></h2>

                  <p>Want to enhance the comfort, style, and privacy of your vehicle? Contact us today to schedule an appointment or request a free quote. Our friendly and knowledgeable team is here to answer any questions you may have and assist you in choosing the right tinting options for your vehicle.</p>
                </div>
                <div className="tagline">
                {/* <Nav.Link href="#bookings" className={activeLink === 'bookings' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
                <Nav.Link 
                  href="#bookings" 
                  className={activeLink === 'bookings' ? 'active navbar-link' : 'navbar-link'} 
                  onClick={() => onUpdateActiveLink('projects')}
                  style={{
                      // backgroundColor: 'purple',
                      color: 'white',
                      // border: '1px solid',
                      marginRight: '2px',
                      borderRadius: '5px',
                      padding: '15px 10px',
                      textDecoration: 'none', // Remove underline
                      cursor: 'pointer',
                      width:"214px", // Show pointer cursor on hover
                      marginLeft: "40px"
                  }}
              >
                  Add Booking
              </Nav.Link>
              </div>
              </div>

                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
