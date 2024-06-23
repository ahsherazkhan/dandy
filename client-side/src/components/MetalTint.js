import React, { useState } from 'react';
import metalDyedTintImage from '../assets/img/car6.jpeg';
// import TintImage from './Tintimage';

const MetalDyedTint = () => {

    const [showContent, setShowContent] = useState({
      drivingComfort: false,
      colorChoices: false,
      opticalClarity: false,
      warranty: false,
      tintShades: false
    });
  
    const toggleContent = (section) => {
      setShowContent(prevState => ({
        ...prevState,
        [section]: !prevState[section]
      }));
    };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden", marginBottom: "20px" }}>
        <img src={metalDyedTintImage} alt="Metal Dyed Tint" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(0, 0, 0, 0.6)", padding: "10px", color: "#fff" }}>
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Metal Dyed Tint</h1>
          <p style={{ fontSize: "1rem", margin: "0" }}>Hybrid metal-dyed tint from DandyTint®, known as High Performance, goes beyond its name.</p>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", background: "linear-gradient(to right, #0F0C29, #332940)", }}>
        <div style={{ width: "60%", borderRadius: "10px" }}>
          <div style={{ padding: "20px", color: "#fff" }}>
            <h2 style={{ marginBottom: "10px",color:"#ffd966" }}>Metal Makes the Custom Difference</h2>
            <p style={{ marginBottom: "20px" }}>The hybrid metal-dyed tint from DandyTint®, known as High Performance, goes beyond its name. It utilizes proven metallized technology, favored by vehicle owners seeking both a reflective appearance and durability. This metallic tint comes in distinct charcoal, bronze, and blue options, offering reduced glare and enhanced heat rejection for superior performance. The inclusion of metal in this tint sets it apart, elevating its effectiveness compared to dyed-only films. The construction begins with a thin polyester film infused with dye, followed by the addition of a metallic coating layer to shield your vehicle's interior from excessive heat. A scratch-resistant finish completes the process. It's this metal component that gives the film its reflective aesthetics in a range of colors.</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", background: "linear-gradient(to right, #0F0C29, #332940)", borderRadius: "10px" }}>
              {/* <TintImage width={'25%'} marginLeft={'35%'}/> */}
        <h2 style={{ marginBottom: "10px",color:"#ffd966" }}>Why matelic Tint?</h2>

          <div style={{ padding: "20px", color: "#fff" }}>
            <h2 style={{ marginBottom: "10px", cursor: "pointer", textDecoration: "underline", color: "#fff", transition: "color 0.3s" }} onClick={() => toggleContent('drivingComfort')} onMouseEnter={() => { toggleContent('drivingComfort')}} onMouseLeave={() => { toggleContent('drivingComfort')}}>Driving Comfort</h2>
            {showContent.drivingComfort &&
              <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                <li>Experience improved driving comfort with enhanced heat rejection.</li>
              </ul>
            }

            <h2 style={{ marginBottom: "10px", cursor: "pointer", textDecoration: "underline", color: "#fff", transition: "color 0.3s" }} onClick={() => toggleContent('colorChoices')} onMouseEnter={() => { toggleContent('colorChoices')}} onMouseLeave={() => { toggleContent('colorChoices')}}>Color Choices</h2>
            {showContent.colorChoices &&
              <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                <li>Distinctive shades of charcoal, bronze, and blue available.</li>
              </ul>
            }

            <h2 style={{ marginBottom: "10px", cursor: "pointer", textDecoration: "underline", color: "#fff", transition: "color 0.3s" }} onClick={() => toggleContent('opticalClarity')} onMouseEnter={() => { toggleContent('opticalClarity')}} onMouseLeave={() => { toggleContent('opticalClarity')}}>Optical Clarity</h2>
            {showContent.opticalClarity &&
              <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                <li>Thin polyester film layered with dye ensures clear visibility.</li>
              </ul>
            }

            <h2 style={{ marginBottom: "10px", cursor: "pointer", textDecoration: "underline", color: "#fff", transition: "color 0.3s" }} onClick={() => toggleContent('warranty')} onMouseEnter={() => { toggleContent('warranty')}} onMouseLeave={() => { toggleContent('warranty')}}>Lifetime Limited Warranty</h2>
            {showContent.warranty &&
              <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
                <li>Backed by a lifetime limited warranty for added peace of mind.</li>
              </ul>
            }

            <h2 style={{ marginBottom: "10px", cursor: "pointer", textDecoration: "underline", color: "#fff", transition: "color 0.3s" }} onClick={() => toggleContent('tintShades')} onMouseEnter={() => { toggleContent('tintShades')}} onMouseLeave={() => { toggleContent('tintShades')}}>Available Tint Shades</h2>
            {showContent.tintShades &&
              <ul style={{ marginBottom: "0", paddingLeft: "20px" }}>
                <li>Explore various tint shades to match your vehicle's style.</li>
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetalDyedTint;
