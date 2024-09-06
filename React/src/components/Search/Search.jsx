import React, { useEffect, useState } from "react";
import Nav from "../share/Nav";
import ResultItem from "./ResultItem";
import Footer from "../share/Footer";
import BaseUrl from "../share/BaseUrl";
import AddToBasket from "../share/AddToBasket";
import AddFavorite from "../share/AddFavorite";
import RemoveFavorite from "../share/RemoveFavorite";
import { RiSearchLine } from "react-icons/ri";
export default function Search() {
  const [resultArray, setResultArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  function searchFood() {
    setResultArray([]);
    if (searchValue) {
      fetch(`${BaseUrl}/foods`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((item) => {
            if (item.title.includes(searchValue)) {
              setResultArray((prev) => [...prev, item]);
            }
          });
        });
    }
  }
  const addToBasket = (id) => {
    AddToBasket(id);
  };
  const addFavorite = (id) => {
    AddFavorite(id, searchFood);
  };
  const removeFavorite = (id) => {
    RemoveFavorite(id, searchFood);
  };
  useEffect(() => {
    searchFood();
  }, []);
  return (
    <div>
      <Nav title="search" />
      <div className="container mb-6 md:mb-12">
        {resultArray.length ? null : (
          <p className="undefined__caption text-xl text-center mt-12">
            موردی با این مشخصات پیدا نکردیم!
          </p>
        )}
        {resultArray.length ? (
          <h1 className="result__title font-estedadBold text-xl text-center">
            نتایج جستجو برای:{" "}
            <span className="food__result text-primary">{searchValue}</span>
          </h1>
        ) : null}
        <form
          className="border border-gray-400 rounded-lg mt-6 flex-center px-4 py-2 text-gray-800 text-sm font-estedadMedium w-full xs:w-96 mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="w-full h-full outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={() => searchFood()}>
            <RiSearchLine className="w-6 h-6" />
          </button>
        </form>
        {resultArray.length ? null : (
          <img
            src="src/assets/images/home/undefined.webp"
            alt="undefined"
            className="undefined__img mx-auto mt-14"
          />
        )}
        <div className="result__wrapper grid grid-cols-1 sm:grid-cols-12 gap-6 items-center justify-items-center content-center w-full justify-center mt-12">
          {resultArray.map((item, index) => (
            <ResultItem
              key={index + 1}
              {...item}
              onPlus={addToBasket}
              onLike={addFavorite}
              onDisLike={removeFavorite}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
