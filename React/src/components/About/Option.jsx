import React from "react";
import OptionItem from "./OptionItem";
import { LiaUserSolid } from "react-icons/lia";
import { LuLineChart } from "react-icons/lu";
import { RiHomeWifiLine } from "react-icons/ri";
import { LiaClipboardListSolid } from "react-icons/lia";
export default function Option() {
  return (
    <section className="bg-gray-300 py-3 md:py-4">
      <div className="container">
        <div className="flex items-start justify-between divide-x divide-x-reverse divide-gray-400">
          <OptionItem
            title="پرسنلی مجرب و حرفه‌ای"
            icon={<LiaUserSolid />}
            center={false}
            right={true}
            left={false}
          />
          <OptionItem
            title="کیفیت بالای غذاها"
            icon={<LuLineChart />}
            center={true}
            right={false}
            left={false}
          />
          <OptionItem
            title="محیطی دلنشین و آرام"
            icon={<RiHomeWifiLine />}
            center={true}
            right={false}
            left={false}
          />
          <OptionItem
            title="منوی متنوع"
            icon={<LiaClipboardListSolid />}
            center={false}
            right={false}
            left={true}
          />
        </div>
      </div>
    </section>
  );
}
