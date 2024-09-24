import React from "react";
import Nav from "../components/share/Nav";
import Footer from "../components/share/Footer";
import MainSection from "../components/Buy/MainSection";
export default function Buy() {
  return (
    <div>
      <Nav title="buy" shadow={true} />
      <MainSection />
      <Footer />
    </div>
  );
}
