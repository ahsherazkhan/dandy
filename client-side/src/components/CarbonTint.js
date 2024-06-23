import React from 'react';
import carbonTintImage from '../assets/img/car2.jpeg';
// import TintImage from './Tintimage';

const CarbonTint = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden"}}>
      <img src={carbonTintImage} alt="Ceramic Tint" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(0, 0, 0, 0.6)", padding: "10px", color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", margin: "0" }}>Enhance your vehicle with DandyTint® Carbon Tint</h1>
        <p style={{ fontSize: "1rem", margin: "0" }}>Choose DandyTint carbon tint for an upgrade in both cooling and appearance.</p>
      </div>
    </div>



    <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
      <div style={{ flex: "1", padding: "50px", background: "linear-gradient(to right, #0F0C29, #332940)", color: "#fff", borderRadius: "10px 0 0 10px", borderRight: "1px solid #ccc" }}>
        <h1 style={{color:"#ffd966"}}>DandyTint® Carbon Series and CXP™ Tint Series</h1>
        <p>Engineered to meet today’s performance demands, the DandyTint® Carbon Series and CXP™ Tint Series offer impressive shades of black and non-reflective appearance to fulfill your solar protection needs. Backed by a manufacturer’s lifetime limited warranty, these series ensure long-lasting color integrity.</p>
        <p>The Carbon Series features innovative carbon technology, providing good heat rejection, glare reduction, and UV protection. On the other hand, the upgraded CXP™ (Carbon Extra Performance) Series boasts a non-metal nano-hybrid carbon composition, offering outstanding infrared rejection for enhanced interior cooling.</p>
        
        {/* <TintImage width={"25%"} marginLeft={'35%'}/> */}
        <h2 style={{color:"#ffd966"}}>Advanced Carbon-Based Technology</h2>
        <ul>
            <li><strong>Enhanced Solar Performance:</strong> Carbon films, unlike simple dyed tints, are manufactured with carbon particles, offering superior performance.</li>
            <li><strong>Customizable Darkness:</strong> DandyTint carbon tint maintains cooler vehicle interiors and prevents color changes common in dyed films.</li>
            <li><strong>Improved Night Vision:</strong> Its carbon component effectively blocks heat and damaging UV rays, reducing strain on air conditioning systems.</li>
        </ul>
      </div>
      </div>
      </div>
  );
}

export default CarbonTint;
