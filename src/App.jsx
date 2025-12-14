import MainPage from "./Pages/MainPage";
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TVShows from "./Pages/TVShows";

export default function App() {
      useEffect(() => {
        AOS.init({
          once: true,          
        });

        AOS.refresh();
      }, []);
  return (
    <div>
      <Router>
        <div className="m-6 ml-16 mr-16">
          <Navbar />
        </div>
        
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<MainPage />} />
          <Route path="/tvshows" element={<TVShows />} />
        </Routes>
      </Router>
    </div>
  );
}