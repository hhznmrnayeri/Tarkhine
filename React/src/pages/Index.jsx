import React, { useEffect, useState } from "react";
import Nav from "../components/share/Nav";
import HeaderSlider from "../components/share/HeaderSlider";
import Footer from "../components/share/Footer";
import SearchBox from "../components/share/SearchBox";
import Topic from "../components/Index/Topic";
import Intro from "../components/Index/Intro";
import Branch from "../components/Index/Branch";
import BaseUrl from "../components/share/BaseUrl";
export default function Index() {
  const [topicArray, setTopicArray] = useState([]);
  const [branchArray, setBranchArray] = useState([]);
  function getTopic() {
    fetch(`${BaseUrl}/topics`)
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
      <Branch branchArray={branchArray} />
      <Footer />
    </div>
  );
}
