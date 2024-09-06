import React, { useEffect, useState } from "react";
import Nav from "../components/share/Nav";
import HeaderSlider from "../components/share/HeaderSlider";
import Footer from "../components/share/Footer";
import SearchBox from "../components/share/SearchBox";
import Special from "../components/Branch/Special";
import Popular from "../components/Branch/Popular";
import Foreign from "../components/Branch/Foreign";
import { LiaClipboardListSolid } from "react-icons/lia";
import Gallery from "../components/Branch/Gallery";
import About from "../components/Branch/About";
import Comment from "../components/Branch/Comment";
import { NavLink } from "react-router-dom";
import BaseUrl from "../components/share/BaseUrl";
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
    fetch(`${BaseUrl}/comments?_embed=user`)
      .then((res) => res.json())
      .then((data) => setCommentArray(data));
  }
  function getFoods() {
    setSpecialArray([]);
    setForeignArray([]);
    setPopularArray([]);
    fetch(`${BaseUrl}/foods`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          if (item.isSpecial) {
            setSpecialArray((prev) => [...prev, item]);
          }
          if (item.isPopular) {
            setPopularArray((prev) => [...prev, item]);
          }
          if (item.isForeign) {
            setForeignArray((prev) => [...prev, item]);
          }
        });
      });
  }
  useEffect(() => {
    getListAlbum();
    getComments();
    getFoods();
  }, []);
  return (
    <div>
      <Nav title="branch" />
      <HeaderSlider title="طعم بی‌نظیر طبیعت!" />
      <SearchBox />
      <Special specialArray={specialArray} getFoods={getFoods} />
      <Popular popularArray={popularArray} getFoods={getFoods} />
      <Foreign foreignArray={foreignArray} getFoods={getFoods} />
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
