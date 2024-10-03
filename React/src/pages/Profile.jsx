import React from "react";
import Nav from "../view/components/Nav";
import Footer from "../view/components/Footer";
import Aside from "../view/Profile/Aside";
export default function Profile() {
  return (
    <div>
      <Nav title="profile" shadow={true} />
      <Aside />
      <Footer />
    </div>
  );
}
