import React from 'react'
import { RiBankLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { TfiBarChart } from "react-icons/tfi";
import { PiBookOpenText } from "react-icons/pi";
import OptionItem from './OptionItem';

export default function Option() {
return (
<div className='container'>
    <div className="flex-center gap-4 md:gap-12 xl:gap-16 text-xs md:text-lg py-4 md:py-14 flex-wrapborder-b border-gray-400">
        <OptionItem title='بیش از 20 شعبه فعال در سراسر کشور' icon={<RiBankLine/>}/>
        <OptionItem title='تسهیلات راه‌اندازی رستوران و تجهیز آن' icon={<IoWalletOutline/>}/>
        <OptionItem title='طرح‌های تشویقی ارتقای فروش' icon={<TfiBarChart/>}/>
        <OptionItem title='اعطای دستورالعمل پخت غذاها' icon={<PiBookOpenText/>}/>
    </div>
</div>
)
}