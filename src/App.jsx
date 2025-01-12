"use client"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
// import FamousTemples from './components/FamousTemples';
import PackagePage from './components/PackagePage.jsx'
import Footer from './components/Footer.jsx';
import Query from './components/Queries.jsx';
import PackageFromPage from './components/PackageFromPage.jsx';
import {locations} from "./components/toursFromData.js"
import CallbackForm from './components/CallbackForm.jsx';
import "./App.css"
import ContactBar from './components/ContactBar.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <ContactBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/famous-temples/:templeName" element={<FamousTemples />} /> */}
          <Route path="/tourist-packages/:packageName" element={<PackagePage />} />
          {
            locations.map(
              location => (
                <>
                  <Route path={`/tour-packages-from-${location.toLowerCase()}`} element={<PackageFromPage />} />
                  <Route path={`/tour-packages-from-${location.toLowerCase()}/:packageName`} element={<PackagePage />} />
                </>
              )
            )
          }
        </Routes>
        <div className="callback">
          <CallbackForm text="Contact Us" />
        </div>
        <Query />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
