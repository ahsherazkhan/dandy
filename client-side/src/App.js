import React from 'react'; // Import React
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogForm from "./components/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Public from "./Public";
import ProductGrid from './components/ProductGrid';
import CeramicTint from './components/CeramicTint';
import AutomotiveTint from './components/AutomotiveTint';
import DyedTint from './components/DyedTint';
import MirrorTint from './components/MirrorTint';
import MetalTint from './components/MetalTint';
import CarbonTint from './components/CarbonTint';
import ClearTint from './components/ClearTint';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div className="App">
      < NavBar/>
      <Router>
        <Routes>
          <Route path="/ceramic-tint" element={<CeramicTint/>} />
          <Route path="/carbon-tint" element={<CarbonTint/>} />
          <Route path="/automotive-film-viewer" element={<AutomotiveTint/>} />
          <Route path="/dyed-charcoal-tint" element={<DyedTint/>} />
          <Route path="/mirror-tint" element={<MirrorTint/>} />
          <Route path="/metal-dyed-tint" element={<MetalTint/>} />
          <Route path="/clear-tint" element={<ClearTint/>} />
          <Route path="/admin" element={<BlogForm />} />
          <Route path="/" element={<Public />} />
          <Route path="/products" element={<ProductGrid />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
