import React, { useEffect, useState } from "react";
import Nav from "../components/share/Nav";
import HeaderSlider from "../components/share/HeaderSlider";
import Footer from "../components/share/Footer";
import BaseUrl from "../components/share/BaseUrl";
import Topic from "../components/Menu/Topic";
import Type from "../components/Menu/Type";
import Search from "../components/Menu/Search";
import List from "../components/Menu/List";
export default function Menu() {
  const [topicArray, setTopicArray] = useState([]);
  const [typeArray, setTypeArray] = useState([]);
  const [foodList, setFoodList] = useState([]);
  function getTopics() {
    fetch(`${BaseUrl}/topics`)
      .then((res) => res.json())
      .then((data) => setTopicArray(data));
  }
  function getType() {
    fetch(`${BaseUrl}/types`)
      .then((res) => res.json())
      .then((data) => setTypeArray(data));
  }
  function getFoods() {
    fetch(`${BaseUrl}/types?_embed=foods`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data);
      });
  }
  useEffect(() => {
    getTopics();
    getType();
    getFoods();
  }, []);
  return (
    <div>
      <Nav title="menu" />
      <HeaderSlider title="لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!" />
      <Topic topicArray={topicArray} />
      <section className="mt-2 md:mt-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between">
            <Type typeArray={typeArray} />
            <Search />
          </div>
        </div>
      </section>
      <List foodList={foodList} getFoods={getFoods} />
      <Footer />
    </div>
  );
}
