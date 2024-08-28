import React from "react";
import Nav from "../share/Nav";
import Footer from "../share/Footer";
import Aside from "./Aside";
export default function Profile() {
  return (
    <div>
      <Nav title="profile" shadow={true} />
      <Aside />
      <Footer />
    </div>
  );
}
