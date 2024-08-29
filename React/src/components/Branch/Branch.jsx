import React, { useEffect, useState } from "react";
import Nav from "../share/Nav";
import HeaderSlider from "../share/HeaderSlider";
import Footer from "../share/Footer";
import SearchBox from "../share/SearchBox";
import Special from "./Special";
import Popular from "./Popular";
import Foreign from "./Foreign";
import { LiaClipboardListSolid } from "react-icons/lia";
import Gallery from "./Gallery";
import About from "./About";
import Comment from "./Comment";
import { NavLink } from "react-router-dom";
import BaseUrl from "../share/BaseUrl";
export default function Branch() {
  const [listAlbum, setListAlbum] = useState([]);
  function getListAlbum() {
    fetch(`${BaseUrl}/albums`)
      .then((res) => res.json())
      .then((data) => setListAlbum(data));
  }
  useEffect(() => {
    getListAlbum();
  }, []);
  return (
    <div>
      <Nav title="branch" />
      <HeaderSlider title="طعم بی‌نظیر طبیعت!" />
      <SearchBox />
      <Special />
      <Popular />
      <Foreign />
      <NavLink
        to="/menu"
        className="flex-center mx-auto border mt-3 md:mt-7 border-primary text-primary gap-2 p-2 rounded md:px-4 md:font-estedadMedium text-xs md:text-base w-52"
      >
        <LiaClipboardListSolid className="w-4 h-4 md:w-6 md:h-6" />
        مشاهده منوی کامل
      </NavLink>
      <Gallery listAlbum={listAlbum} />
      <About />
      <Comment />
      <Footer />
    </div>
  );
}
