import React, { useEffect, useState } from "react";
import Nav from "../view/components/Nav";
import HeaderSlider from "../view/components/HeaderSlider";
import Footer from "../view/components/Footer";
import SearchBox from "../view/components/SearchBox";
import Special from "../view/Branch/Special";
import Popular from "../view/Branch/Popular";
import Foreign from "../view/Branch/Foreign";
import NoteIcon from "../assets/svg/NoteIcon";
import Gallery from "../view/Branch/Gallery";
import About from "../view/Branch/About";
import Comment from "../view/Branch/Comment";
import { NavLink } from "react-router-dom";
import BaseUrl from "../view/components/BaseUrl";
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
        <NoteIcon size="w-4 h-4 md:w-6 md:h-6" />
        مشاهده منوی کامل
      </NavLink>
      <Gallery listAlbum={listAlbum} />
      <About />
      <Comment commentArray={commentArray} />
      <Footer />
    </div>
  );
}
