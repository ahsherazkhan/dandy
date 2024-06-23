import React from 'react';
import dyedCharcoalTintImage from '../assets/img/car5.jpeg';
// import TintImage from './Tintimage';

const DyedCharcoalTint = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden", marginBottom: "20px" }}>
        <img src={dyedCharcoalTintImage} alt="Dyed Charcoal Tint" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(0, 0, 0, 0.6)", padding: "10px", color: "#fff" }}>
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Dyed Charcoal Tint</h1>
          <p style={{ fontSize: "1rem", margin: "0" }}>Upgrade Your Vehicle's Appearance and Comfort with Dyed Charcoal Tint</p>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", background: "linear-gradient(to right, #0F0C29, #332940)", borderRadius: "10px", padding: "40px", color: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <p>The DandyTint Standard Pro and Standard Series offer dyed charcoal tints that are both economical and stylish. Designed to provide good heat rejection, UV protection, and optical clarity, these tint standards are available in multiple shades to enhance your vehicle's appearance inside and out. Backed by a limited warranty against various issues, including peeling, cracking, and adhesive failure, the Standard Pro Series also includes protection against color changes with a manufacturer’s lifetime limited warranty.</p>

          <p>Engineered with charcoal dye infused into the film layers, DandyTint dyed charcoal tint products offer added protection against color changes. With various shades available, you can choose the degree of heat rejection, UV protection, and aesthetic appeal that suits your preferences.</p>
        {/* <TintImage width={'25%'} marginLeft={'35%'}/> */}
          <div style={{ width:"50%"}}>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "10px", borderBottom: "2px solid #fff", paddingBottom: "5px", color:"#ffd966" }}>Custom Features. Affordable Performance.</h1>
          <ul>
            <li><strong>Added Comfort:</strong> DandyTint dyed charcoal tint provides improved comfort by reducing heat and UV exposure.</li>
            <li><strong>Style and Privacy:</strong> Enhance your vehicle's appearance and privacy with multiple tint shades available.</li>
            <li><strong>Low Reflection:</strong> Enjoy low reflection for a sleek and stylish look.</li>
            <li><strong>Optical Clarity:</strong> Maintain clear visibility with DandyTint's dyed charcoal tint technology.</li>
          </ul>

          <h1 style={{ fontSize: "1.5rem", marginBottom: "10px", borderBottom: "2px solid #fff", paddingBottom: "5px", color:"#ffd966" }}>Standard Pro</h1>
          <p>The Standard Pro Series offers additional protection against color changes with a manufacturer’s lifetime limited warranty.</p>

          <h1 style={{ fontSize: "1.5rem", marginBottom: "10px", borderBottom: "2px solid #fff", paddingBottom: "5px", color:"#ffd966" }}>Standard</h1>
          <p>The Standard Series provides economical yet effective tinting options with a limited warranty against various issues.</p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default DyedCharcoalTint;
