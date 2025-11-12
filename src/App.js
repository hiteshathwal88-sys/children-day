import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Celebration from "./components/Celebration";
import UploadImage from "./components/UploadImage";


function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Celebration" element={<Celebration />} />
          <Route path="/upload" element={<UploadImage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
