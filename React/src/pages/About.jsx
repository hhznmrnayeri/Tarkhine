import React from "react";
import Nav from "../view/components/Nav";
import Header from "../view/components/Header";
import Footer from "../view/components/Footer";
import Section from "../view/About/Section";
import Option from "../view/About/Option";
export default function About() {
  return (
    <div>
      <Nav title="about" />
      <Header
        title="درباره ترخینه بیشتر بدانید!"
        background="bg-header-about"
      />
      <Section />
      <Option />
      <Footer />
    </div>
  );
}
