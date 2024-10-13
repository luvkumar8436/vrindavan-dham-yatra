import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FamousTemples from './components/FamousTemples';
import ContactUs from './components/ContactUs';
import PackagePage from './components/PackagePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/famous-temples/:templeName" element={<FamousTemples />} />
          <Route path="/tourist-packages/:packageName" element={<PackagePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="" />
          <Route path="" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
