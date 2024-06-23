import React from 'react';
import ceramicTintImage from '../assets/img/car2.jpeg';
// import TintImage from './Tintimage';

const MirrorTint = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden"}}>
        <img src={ceramicTintImage} alt="Ceramic Tint" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(0, 0, 0, 0.6)", padding: "10px", color: "#fff" }}>
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Mirror Tint by DandyTints</h1>
          <p>Transforming ordinary car windows into captivating reflective surfaces, that stands out.</p>
        </div>
      </div>

      {/* <TintImage width={'25%'} marginLeft={'35%'}/> */}
      <div style={{ display: "flex", flexDirection: "row", marginTop: "30px", position: "relative" }}>
        <div style={{ flex: "1", padding: "70px", background: "linear-gradient(to right, #0F0C29, #332940)", color: "#fff", borderRadius: "10px 0 0 10px", borderRight: "1px solid #ccc" }}>
          <h2 style={{ color:"#ffd966"}}>Unique Appearance. Inside and Out</h2>
          <p>Transforming ordinary car windows into captivating reflective surfaces, the InfinityOP tint creates a striking exterior look. While visible from outside, the interior maintains a neutral appearance. This all-metal nichrome tint not only enhances aesthetics but also improves driving comfort by reflecting solar heat, ensuring cooler cabin temperatures and reducing the need for A.C.</p>
        </div>

        <div style={{ width: "2px", backgroundColor: "#ccc", position: "absolute", top: "0", bottom: "0", left: "50%", transform: "translateX(-50%)" }}></div>

        <div style={{ flex: "1", padding: "70px", background: "linear-gradient(to right, #332940, #0F0C29)", color: "#fff", borderRadius: "0 10px 10px 0", borderLeft: "1px solid #ccc" }}>
          <h2 style={{ color:"#ffd966"}}>Advantages of Mirror Window Tint</h2>
          <ul>
          <li><strong>Nichrome Technology:</strong> Crafted with all-metal construction for superior style and performance.</li>
            <li><strong>Interior Comfort and Protection:</strong> Offers outstanding heat rejection, glare reduction, and UV protection.</li>
            <li><strong>Reflective Finish:</strong> Boasts a mirrored exterior appearance while providing a neutral, non-distracting view from the interior.</li>
            <li><strong>Lifetime Limited Warranty:</strong> Professionally sold and installed InfinityOP Series tint is backed by a manufacturer’s lifetime limited warranty against color changes and more.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MirrorTint;
