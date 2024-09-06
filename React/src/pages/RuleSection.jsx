import React, { useEffect, useState } from "react";
import Header from "../components/share/Header";
import Accordion from "../components/Question/Accordion";
import State from "../components/Question/State";
import BaseUrl from "../components/share/BaseUrl";
export default function RuleSection() {
  const [ruleList, setRuleList] = useState([]);
  function getQuestions() {
    fetch(`${BaseUrl}/rules`)
      .then((res) => res.json())
      .then((data) => setRuleList(data));
  }
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      <Header title="قوانین ترخینه" background="bg-header-rule" />
      <div className="bg-gray-300">
        <div className="container">
          <State />
        </div>
      </div>
      <div className="container mb-6 md:mb-12">
        <div className="transition-all duration-300 mt-3 md:mt-6 visible opacity-100 h-auto border border-gray-400 rounded overflow-hidden">
          {ruleList.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
