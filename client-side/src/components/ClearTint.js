import React from 'react';
import clearTintImage from '../assets/img/car4.jpeg';
// import TintImage from './Tintimage';

const ClearTint = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden", marginBottom: "20px" }}>
        <img src={clearTintImage} alt="Clear Tint" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(0, 0, 0, 0.6)", padding: "10px", color: "#fff" }}>
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Clear Tint by DandyTints</h1>
          <p style={{ fontSize: "1rem", margin: "0" }}>Upgrade Your Window Glass with CoolSight's virtually imperceptible tint</p>
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ background: "linear-gradient(to right, #0F0C29, #332940)", borderRadius: "10px" , padding: "20px"}}>
          <div style={{width: "93%", padding: "20px", color: "#fff" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "10px", color:"#ffd966" }}>Nanoceramic Technology</h2>
            <p>Experience the advanced heat-blocking protection of DandyTint's CoolSight Series, crafted with nearly transparent, nano-ceramic tint technology. Unlike traditional tints, CoolSight is virtually clear once installed, offering cooling benefits without reducing visible light. Its non-metal, nano-ceramic construction ensures clear connectivity for GPS, satellite radio, and mobile phones. 
            Upgrade your window glass with CoolSight for good heat rejection and excellent UV defense. Micro-thin nano-ceramic construction delivers effective solar performance. It is virtually imperceptible and helps enhance interior cooling without altering your vehicle’s look or blocking the view. For trucks and SUVs, this clear choice can be paired with factory-tinted rear windows for a consistent appearance without darkening the rear glass—plus the added benefits of heat and UV protection. Then, if desired, a matching tint color can be installed on the front glass to achieve a seamless look that helps deliver uniform, defensive performance.
            </p>
            
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ flex: 1, padding: "20px", color: "#fff" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "10px", color:"#ffd966" }}>Stealth Protection</h2>
                <p>CoolSight provides effective solar performance without altering your vehicle's appearance or blocking the view. Its micro-thin nano-ceramic construction delivers superior heat rejection and excellent UV defense, ensuring a comfortable interior temperature.</p>

                <h2 style={{ fontSize: "2rem", marginBottom: "10px", color:"#ffd966" }}>Optical Clarity</h2>
                <p>Enjoy clear visibility with CoolSight's virtually imperceptible tint. Enhance interior cooling without compromising your vehicle's look or obstructing your view of the road.</p>

                <h2 style={{ fontSize: "2rem", marginBottom: "10px", color:"#ffd966" }}>Clear Communication</h2>
                <p>Stay connected on the go with CoolSight's non-metal, nano-ceramic construction, which ensures clear communication for GPS, satellite radio, and mobile phones.</p>

                <h2 style={{ fontSize: "2rem", marginBottom: "10px", color:"#ffd966" }}>Lifetime Limited Warranty</h2>
                <p>Experience peace of mind with CoolSight's lifetime limited warranty, offering protection against color changes and more.</p>
              </div>
              <div style={{ width: "2px", backgroundColor: "#ccc", position: "relative", top: "0", bottom: "0", left: "50%", transform: "translateX(-50%)" }}></div>

              <div style={{ flex: 1, padding: "20px", color: "#fff" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "10px", color:"#ffd966" }}>Is Clear Window Tint Permitted on Windshields? </h2>
                <p>Installing clear tint on your vehicle’s windshield may or may not be legally permissible in your locality. Some states and provinces have guidelines that must be followed before windshield installation. Before choosing clear tint as an option, research your local tint laws.</p>
                {/* <TintImage width={'25%'} marginLeft={'35%'}/> */}
              </div>
              
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ClearTint;
