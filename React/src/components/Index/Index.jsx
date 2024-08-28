import React, { useEffect, useState } from "react";
import Nav from "../share/Nav";
import HeaderSlider from "../share/HeaderSlider";
import Footer from "../share/Footer";
import SearchBox from "../share/SearchBox";
import Topic from "./Topic";
import Intro from "./Intro";
import Branch from "./Branch";
import BaseUrl from "../share/BaseUrl";
export default function Index() {
  const [topicArray, setTopicArray] = useState([]);
  const [branchArray, setBranchArray] = useState([]);
  function getTopic() {
    fetch(`${BaseUrl}/topic`)
      .then((res) => res.json())
      .then((data) => setTopicArray(data));
  }
  function getBranch() {
    fetch(`${BaseUrl}/branches`)
      .then((res) => res.json())
      .then((data) => setBranchArray(data));
  }
  useEffect(() => {
    getTopic();
    getBranch();
  }, []);
  return (
    <div>
      <Nav title="home" />
      <HeaderSlider title="تجربه غذای سالم گیاهی به سبک ترخینه" />
      <SearchBox />
      <Topic topicArray={topicArray} branchArray={branchArray} />
      <Intro />
      <Branch />
      <Footer />
    </div>
  );
}
