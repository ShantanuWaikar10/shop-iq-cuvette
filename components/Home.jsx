import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Product from "./ProductList";
import axios from "axios";

const Home = () => {

  const [data, setData] = useState([]);

  const getDataFromApi = async () => {
    await axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data.products);
      setData(response.data.products);
    });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Product data={data}/>
    </>
  );
};

export default Home;
