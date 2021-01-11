import React from "react";
import { Header } from "../../components/Header";
import Banner from "../../components/Banner";
import { Features } from "../../components/Features";
import SliderWomen from "../../components/SliderWomen/Women";
import Offer from "../../components/Offer";
import { Man } from "../../components/SliderMen/Man";
import Collection from "../../components/Collection";
import Blog from "../../components/Card/Blogs";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <SliderWomen />
      <Offer />
      <Man />
      <Collection />
      <Blog />
      <Footer />
    </>
  );
}
