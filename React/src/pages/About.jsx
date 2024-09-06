import React from "react";
import Nav from "../components/share/Nav";
import Header from "../components/share/Header";
import Footer from "../components/share/Footer";
import Section from "../components/About/Section";
import Option from "../components/About/Option";
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
