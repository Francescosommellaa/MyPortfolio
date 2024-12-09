import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Molecules
import Navbar from "./Components/Molecules/Navbar/Navbar";
import Footer from "./Components/Molecules/Footer/Footer";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Parliamo from "./pages/Parliamo/Parliamo";
import Project from "./pages/Project/Project";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/parliamo" element={<Parliamo />} />
          <Route path="/project/:slug" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
