import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import phoneIcon from '../assets/img/phoneIcon.png';
import logo from '../assets/img/logo.png'
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <select
              className="tagline1"
              onChange={(e) => {
                if (e.target.value) {
                  window.location.href = e.target.value;
                }
              }}
              style={{ padding: "10px", fontSize: "16px", borderRadius: "4px", color: "white" }}
            >
              <option value="">Select your Tint</option>
              <option value="/ceramic-tint">Ceramic Tint</option>
              <option value="/carbon-tint">Carbon Tint</option>
              <option value="/metal-dyed-tint">Metal-Dyed Tint</option>
              <option value="/dyed-charcoal-tint">Dyed Charcoal Tint</option>
              <option value="/clear-tint">Clear Tint</option>
              <option value="/mirror-tint">Mirror Tint</option>
            </select>

              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link 
                as="a" 
                href="/products" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('products')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Products
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.facebook.com/dandytints"  target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/dandytints"  target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
              <a href="tel:61455121312" target="blank"><img src={phoneIcon} alt="Call +61455121312" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
