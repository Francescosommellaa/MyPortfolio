import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Molecules
import Navbar from "./Components/Molecules/Navbar/Navbar";
import Footer from "./Components/Molecules/Footer/Footer";

// pages
import Home from "./Pages/Home/Home";
import Parliamo from "./Pages/Parliamo/Parliamo";
import Project from "./Pages/Project/Project";
import Cursor from "./Components/Atoms/Interaction/Cursor/Cursor";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parliamo" element={<Parliamo />} />
          <Route path="/project/:slug" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
