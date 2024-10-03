import React, { useEffect, useState } from "react";
import Header from "../view/components/Header";
import Accordion from "../view/Question/Accordion";
import State from "../view/Question/State";
import BaseUrl from "../view/components/BaseUrl";
export default function QuestionSection() {
  const [questionList, setQuestionList] = useState([]);
  function getQuestions() {
    fetch(`${BaseUrl}/questions`)
      .then((res) => res.json())
      .then((data) => setQuestionList(data));
  }
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      <Header title="سوالات متداول از ترخینه" background="bg-header-question" />
      <div className="bg-gray-300">
        <div className="container">
          <State title="question" />
        </div>
      </div>
      <div className="container mb-6 md:mb-12">
        <div className="transition-all duration-300 mt-3 md:mt-6 visible opacity-100 h-auto border border-gray-400 rounded overflow-hidden">
          {questionList.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
