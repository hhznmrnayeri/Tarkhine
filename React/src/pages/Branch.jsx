import React, { useEffect, useState } from "react";
import Nav from "../view/components/Nav";
import HeaderSlider from "../view/components/HeaderSlider";
import Footer from "../view/components/Footer";
import SearchBox from "../view/components/SearchBox";
import NoteIcon from "../assets/svg/NoteIcon";
import Gallery from "../view/Branch/Gallery";
import About from "../view/Branch/About";
import Comment from "../view/Branch/Comment";
import { NavLink } from "react-router-dom";
import BaseUrl from "../view/components/BaseUrl";
import SectionItem from "../view/Branch/SectionItem";
import AddToBasket from "../hooks/AddToBasket";
import AddFavorite from "../hooks/AddFavorite";
import RemoveFavorite from "../hooks/RemoveFavorite";
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
    setForeignArray([]);
    setSpecialArray([]);
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
  const addToBasket = (id) => {
    AddToBasket(id);
  };
  const addFavorite = (id) => {
    AddFavorite(id, getFoods);
  };
  const removeFavorite = (id) => {
    RemoveFavorite(id, getFoods);
  };
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
      <SectionItem
        array={specialArray}
        label="special"
        onPlus={addToBasket}
        onLike={addFavorite}
        onDisLike={removeFavorite}
      />
      <SectionItem
        array={popularArray}
        label="popular"
        onPlus={addToBasket}
        onLike={addFavorite}
        onDisLike={removeFavorite}
      />
      <SectionItem
        array={foreignArray}
        label="foreign"
        onPlus={addToBasket}
        onLike={addFavorite}
        onDisLike={removeFavorite}
      />
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
