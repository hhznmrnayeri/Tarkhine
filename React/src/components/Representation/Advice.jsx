import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Calendar from "../share/Calendar";
import Overlay from "../share/Overlay";
export default function Advice() {
  const [showCalendar, setShowCalendar] = useState(false);
  const closeCalendar = () => {
    setShowCalendar(false);
  };
  const openCalendar = () => {
    setShowCalendar(true);
  };
  return (
    <>
      <div className="container">
        <section className="text-center mt-4 md:mt-12 pb-4 md:pb-14 border-b border-gray-400">
          <SectionTitle title="دریافت مشاوره" />
          {/* advice form */}
          <form className="flex-center flex-col gap-6 w-full">
            {/* input wrapper */}
            <div className="flex items-center gap-6 text-sm w-full mt-6 flex-col sm:flex-row">
              {/* input */}
              <input
                type="text"
                className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                placeholder="نام و نام‌خانوادگی"
              />
              {/* input */}
              <input
                type="text"
                className="outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full flex-1"
                placeholder="شماره تماس"
              />
              {/* input wrapper */}
              <div
                className="calendar__wrapper group relative w-full flex-1 flex flex-col"
                onClick={openCalendar}
                tabIndex="1"
              >
                {/* input */}
                <input
                  type="text"
                  className=" outline-none border border-gray-400 text-gray-700 rounded p-2 md:px-4 w-full"
                  placeholder="زمان ایده‌آل"
                />
                {showCalendar && <Calendar />}
              </div>
            </div>
            {/* form btn */}
            <button className="text-white bg-primary md:font-estedadMedium text-xs md:text-base rounded px-4 h-10 w-40">
              درخواست مشاوره
            </button>
          </form>
        </section>
      </div>
      {showCalendar && (
        <Overlay onHide={closeCalendar} backgroundNone={true}></Overlay>
      )}
    </>
  );
}
