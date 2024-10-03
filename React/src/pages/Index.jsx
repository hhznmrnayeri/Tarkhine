import React, { useEffect, useState } from "react";
import Nav from "../view/components/Nav";
import HeaderSlider from "../view/components/HeaderSlider";
import Footer from "../view/components/Footer";
import SearchBox from "../view/components/SearchBox";
import Topic from "../view/Index/Topic";
import Intro from "../view/Index/Intro";
import Branch from "../view/Index/Branch";
import BaseUrl from "../view/components/BaseUrl";
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
