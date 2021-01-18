import React from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import RegisterComp from "../../components/RegisterComp";

export default function Register() {
  return (
    <div>
      <Header />
      <RegisterComp pageComp />
      <Footer />
    </div>
  );
}
