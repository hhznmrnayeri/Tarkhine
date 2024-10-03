import React from "react";
import Nav from "../view/components/Nav";
import Footer from "../view/components/Footer";
import { Outlet } from "react-router-dom";
export default function Question() {
  return (
    <div>
      <Nav title="about" />
      <Outlet />
      <Footer />
    </div>
  );
}
