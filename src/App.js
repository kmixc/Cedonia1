import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Quote from "./pages/Quote";
import Navbar_Cedonia from "./components/Navbar_Cedonia";



function App() {
  return (
    <div className="App">
      <Navbar_Cedonia />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
