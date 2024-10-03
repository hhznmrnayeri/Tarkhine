import React from "react";
import Nav from "../view/components/Nav";
import Footer from "../view/components/Footer";
import Header from "../view/components/Header";
import Option from "../view/Representation/Option";
import Advantage from "../view/Representation/Advantage";
import Advice from "../view/Representation/Advice";
import Form from "../view/Representation/Form";
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
