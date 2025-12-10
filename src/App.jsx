import MainPage from "./Pages/MainPage";
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function App() {
      useEffect(() => {
        AOS.init({
          once: true,          
        });

        AOS.refresh();
      }, []);
  return (
    <div>
      <MainPage />
    </div>
  );
}