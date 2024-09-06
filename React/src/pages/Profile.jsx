import React from "react";
import Nav from "../components/share/Nav";
import Footer from "../components/share/Footer";
import Aside from "../components/Profile/Aside";
export default function Profile() {
  return (
    <div>
      <Nav title="profile" shadow={true} />
      <Aside />
      <Footer />
    </div>
  );
}
