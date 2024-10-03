import React from "react";
import OptionItem from "./OptionItem";
import WifiIcon from "../../assets/svg/WifiIcon";
import DiagramIcon from "../../assets/svg/DiagramIcon";
import UserIcon from "../../assets/svg/UserIcon";
import MenuBoardIcon from "../../assets/svg/MenuBoardIcon";
export default function Option() {
  return (
    <section className="bg-gray-300 py-3 md:py-4">
      <div className="container">
        <div className="flex items-start justify-between divide-x divide-x-reverse divide-gray-400">
          <OptionItem
            title="پرسنلی مجرب و حرفه‌ای"
            icon={<UserIcon />}
            center={false}
            right={true}
            left={false}
          />
          <OptionItem
            title="کیفیت بالای غذاها"
            icon={<DiagramIcon />}
            center={true}
            right={false}
            left={false}
          />
          <OptionItem
            title="محیطی دلنشین و آرام"
            icon={<WifiIcon />}
            center={true}
            right={false}
            left={false}
          />
          <OptionItem
            title="منوی متنوع"
            icon={<MenuBoardIcon />}
            center={false}
            right={false}
            left={true}
          />
        </div>
      </div>
    </section>
  );
}
