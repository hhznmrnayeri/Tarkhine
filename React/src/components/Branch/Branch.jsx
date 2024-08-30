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
  const [commentArray, setCommentArray] = useState([]);
  const [specialArray, setSpecialArray] = useState([]);
  const [popularArray, setPopularArray] = useState([]);
  const [foreignArray, setForeignArray] = useState([]);
  function getListAlbum() {
    fetch(`${BaseUrl}/albums`)
      .then((res) => res.json())
      .then((data) => setListAlbum(data));
  }
  function getComments() {
    fetch(`${BaseUrl}/comments?_embed=users`)
      .then((res) => res.json())
      .then((data) => setCommentArray(data));
  }
  function getSpecial() {
    fetch(`${BaseUrl}/specials?_embed=foods`)
      .then((res) => res.json())
      .then((data) => setSpecialArray(data));
  }
  function getPopular() {
    fetch(`${BaseUrl}/popular?_embed=foods`)
      .then((res) => res.json())
      .then((data) => setPopularArray(data));
  }
  function getForeign() {
    fetch(`${BaseUrl}/foreign?_embed=foods`)
      .then((res) => res.json())
      .then((data) => setForeignArray(data));
  }
  useEffect(() => {
    getListAlbum();
    getComments();
    getSpecial();
    getPopular();
    getForeign();
  }, []);
  return (
    <div>
      <Nav title="branch" />
      <HeaderSlider title="طعم بی‌نظیر طبیعت!" />
      <SearchBox />
      <Special specialArray={specialArray} />
      <Popular popularArray={popularArray} />
      <Foreign foreignArray={foreignArray} />
      <NavLink
        to="/menu"
        className="flex-center mx-auto border mt-3 md:mt-7 border-primary text-primary gap-2 p-2 rounded md:px-4 md:font-estedadMedium text-xs md:text-base w-52"
      >
        <LiaClipboardListSolid className="w-4 h-4 md:w-6 md:h-6" />
        مشاهده منوی کامل
      </NavLink>
      <Gallery listAlbum={listAlbum} />
      <About />
      <Comment commentArray={commentArray} />
      <Footer />
    </div>
  );
}
