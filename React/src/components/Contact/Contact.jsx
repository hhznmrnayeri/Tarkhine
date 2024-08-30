import React, { useEffect, useState } from "react";
import Nav from "../share/Nav";
import Footer from "../share/Footer";
import Header from "../share/Header";
import Section from "./Section";
import BaseUrl from "../share/BaseUrl";
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
