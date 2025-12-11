import MainPage from "./Pages/MainPage";
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}