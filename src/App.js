import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductShowcase from "./components/ProductShowcase";
import FeaturedProducts from "./components/FeaturedProducts";
import VideoTutorial from "./components/VideoTutorial";
import CustomerFeedback from "./components/CustomerFeedback";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Header />
      <div
        id="next-section"
        style={{
          height: "200%",
          width: "100%",
          backgroundColor: "rgb(50, 17, 7)",
        }}
      >
        <HeroSection />
        <div
          style={{
            backgroundColor: "#3a1308",
            color: "white",
            padding: "60px 20px",
            textAlign: "center",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          <ProductShowcase />
        </div>
        <FeaturedProducts />
        <VideoTutorial />
        <CustomerFeedback />
        <Footer />
      </div>
    </>
  );
}

export default App;
