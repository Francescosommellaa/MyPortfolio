import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "motion/react";

// Molecules
import Navbar from "./Components/Molecules/Navbar/Navbar";
import Footer from "./Components/Molecules/Footer/Footer";

// pages
import Home from "./Pages/Home/Home";
import Parliamo from "./Pages/Parliamo/Parliamo";
import Project from "./Pages/Project/Project";
import Cursor from "./Components/Atoms/Animation/Cursor/Cursor";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Cursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parliamo" element={<Parliamo />} />
            <Route path="/project/:slug" element={<Project />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
