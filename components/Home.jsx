import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Product from "./ProductList";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Product/>
    </>
  );
};

export default Home;
