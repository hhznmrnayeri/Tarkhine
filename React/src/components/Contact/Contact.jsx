import React from "react";
import Nav from "../share/Nav";
import Footer from "../share/Footer";
import Header from "../share/Header";
import Section from "./Section";
export default function Contact() {
  return (
    <div>
      <Nav title="contact" />
      <Header title="با ترخینه در تماس باشید." background="bg-header-contact" />
      <Section />
      <Footer />
    </div>
  );
}
