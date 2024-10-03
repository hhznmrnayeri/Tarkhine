import React from "react";
import Nav from "../view/components/Nav";
import Footer from "../view/components/Footer";
import MainSection from "../view/Buy/MainSection";
export default function Buy() {
  return (
    <div>
      <Nav title="buy" shadow={true} />
      <MainSection />
      <Footer />
    </div>
  );
}
