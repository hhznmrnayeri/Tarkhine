import React, { useEffect, useState } from "react";
import Nav from "../components/share/Nav";
import Footer from "../components/share/Footer";
import Header from "../components/share/Header";
import Section from "../components/Contact/Section";
import BaseUrl from "../components/share/BaseUrl";
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
