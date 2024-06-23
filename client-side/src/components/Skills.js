import React from 'react'; // Import React

import meter1 from "../assets/img/sservice.png";
import meter2 from "../assets/img/staff.png";
import meter3 from "../assets/img/price.png";
import meter4 from "../assets/img/high.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container" style={{marginTop: "120px"}}>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Why Choose Us?</h2>
                        <p>At Dandy Tints, we specialize in providing high-quality, professional car tinting services<br/> tailored to meet your individual needs with years of experience and a team of skilled technicians,<br/> we are committed to enhancing the comfort, style, and privacy of your vehicle.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Quality Service</h5>
                                <p> We use only the best materials and meticulous application techniques.</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Competitive Pricing</h5>
                                <p>Get the best value with our market-competitive rates.</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Satisfaction Guarantee</h5>
                                <p>We’re not happy until you’re thrilled with our service.</p>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="" />  
                                <h5>Experienced Professionals</h5>
                                <p>Our team has highly trained experts with years of experience.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
