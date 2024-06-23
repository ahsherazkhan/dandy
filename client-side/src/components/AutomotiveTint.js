import React from 'react';
import ceramicTintImage from '../assets/img/car1.jpeg';

const AutomotiveTint = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden"}}>
        <img src={ceramicTintImage} alt="Ceramic Tint" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(0, 0, 0, 0.6)", padding: "10px", color: "#fff" }}>
          <h1 style={{ fontSize: "2rem", margin: "0" }}>Experience Ultimate Protection with DandyTint® Ceramic Tint</h1>
          <p style={{ fontSize: "1rem", margin: "0" }}>Choose DandyTint ceramic tint for an upgrade in both cooling and appearance.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", marginTop: "30px", position: "relative" }}>
        <div style={{ flex: "1", padding: "70px", background: "linear-gradient(to right, #0F0C29, #332940)", color: "#fff", borderRadius: "10px 0 0 10px", borderRight: "1px solid #ccc" }}>
          <h2>Experience Ultimate Protection</h2>
          <p>Ceramic window tint, powered by DandyTint®, offers unparalleled heat and UV protection. Utilizing advanced nano-ceramic construction, this top-performing tint provides exceptional performance, just like the ceramic tiles that protected the Space Shuttle during re-entry into Earth’s atmosphere. Enjoy superior heat and infrared rejection, glare reduction, and 99% UV blocking for your vehicle.</p>
        </div>

        <div style={{ width: "2px", backgroundColor: "#ccc", position: "absolute", top: "0", bottom: "0", left: "50%", transform: "translateX(-50%)" }}></div>

        <div style={{ flex: "1", padding: "70px", background: "linear-gradient(to right, #332940, #0F0C29)", color: "#fff", borderRadius: "0 10px 10px 0", borderLeft: "1px solid #ccc" }}>
          <h2>Advantages of Ceramic Window Tint</h2>
          <ul>
            <li><strong>Enhanced Solar Performance:</strong> Ceramic technology improves solar performance and infrared rejection, maintaining a fully non-metal construction for clear electronic communications.</li>
            <li><strong>Customizable Darkness:</strong> DandyTint ceramic tint is available in various shades, allowing you to control the darkness based on visible light transmission (VLT).</li>
            <li><strong>Improved Night Vision:</strong> Ceramic tint can actually enhance visibility when driving after dark by reducing distractions from headlights and streetlight glare.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AutomotiveTint;
