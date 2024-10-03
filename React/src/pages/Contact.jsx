import React, { useEffect, useState } from "react";
import Nav from "../view/components/Nav";
import Footer from "../view/components/Footer";
import Header from "../view/components/Header";
import Section from "../view/Contact/Section";
import BaseUrl from "../view/components/BaseUrl";
export default function Contact() {
  const [branchArray, setBranchArray] = useState([]);
  function getBranch() {
    fetch(`${BaseUrl}/branches`)
      .then((res) => res.json())
      .then((data) => setBranchArray(data));
  }
  useEffect(() => {
    getBranch();
  }, []);
  return (
    <div>
      <Nav title="contact" />
      <Header title="با ترخینه در تماس باشید." background="bg-header-contact" />
      <Section branchArray={branchArray} />
      <Footer />
    </div>
  );
}
