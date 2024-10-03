import React from "react";
import BookIcon from "../../assets/svg/BookIcon";
import EmptyWalletIcon from "../../assets/svg/EmptyWalletIcon";
import ChartIcon from "../../assets/svg/ChartIcon";
import BankIcon from "../../assets/svg/BankIcon";
import OptionItem from "./OptionItem";
export default function Option() {
  return (
    <div className="container">
      <div className="flex-center gap-4 md:gap-12 xl:gap-16 text-xs md:text-lg py-4 md:py-14 flex-wrap border-b border-gray-400">
        <OptionItem
          title="بیش از 20 شعبه فعال در سراسر کشور"
          icon={<BankIcon />}
        />
        <OptionItem
          title="تسهیلات راه‌اندازی رستوران و تجهیز آن"
          icon={<EmptyWalletIcon />}
        />
        <OptionItem title="طرح‌های تشویقی ارتقای فروش" icon={<ChartIcon />} />
        <OptionItem title="اعطای دستورالعمل پخت غذاها" icon={<BookIcon />} />
      </div>
    </div>
  );
}
