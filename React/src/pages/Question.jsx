import React from "react";
import Nav from "../components/share/Nav";
import Footer from "../components/share/Footer";
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
