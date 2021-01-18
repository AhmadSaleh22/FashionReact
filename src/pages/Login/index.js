import React from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import LoginComp from "../../components/LoginComp";

export default function Login() {
  return (
    <div>
      <Header />
      <LoginComp pageComp />
      <Footer />
    </div>
  );
}
