import React from "react";
import Nav from "../components/share/Nav";
import Footer from "../components/share/Footer";
import { Outlet } from "react-router-dom";
export default function Buy() {
  return (
    <div>
      <Nav title="buy" shadow={true} />
      <Outlet />
      <Footer />
    </div>
  );
}
