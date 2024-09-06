import React from "react";
import Nav from "../components/share/Nav";
import Footer from "../components/share/Footer";
import Header from "../components/share/Header";
import Option from "../components/Representation/Option";
import Advantage from "../components/Representation/Advantage";
import Advice from "../components/Representation/Advice";
import Form from "../components/Representation/Form";
export default function Representation() {
  return (
    <div>
      <Nav title="representation" />
      <Header
        title="همین الان به خانواده بزرگ ترخینه بپیوندید!"
        background="bg-header-representation"
      />
      <Option />
      <Advantage />
      <Advice />
      <Form />
      <Footer />
    </div>
  );
}
