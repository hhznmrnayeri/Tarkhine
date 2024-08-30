import React, { useEffect, useState } from "react";
import Header from "../share/Header";
import Accordion from "./Accordion";
import State from "./State";
import BaseUrl from "../share/BaseUrl";
export default function PrivacySection() {
  const [privacyList, setPrivacyList] = useState([]);
  function getQuestions() {
    fetch(`${BaseUrl}/privacy`)
      .then((res) => res.json())
      .then((data) => setPrivacyList(data));
  }
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      <Header title="حریم شخصی کاربران" background="bg-header-privacy" />
      <div className="bg-gray-300">
        <div className="container">
          <State />
        </div>
      </div>
      <div className="container mb-6 md:mb-12">
        <div className="transition-all duration-300 mt-3 md:mt-6 visible opacity-100 h-auto border border-gray-400 rounded overflow-hidden">
          {privacyList.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
