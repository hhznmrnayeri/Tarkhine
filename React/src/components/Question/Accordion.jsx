import React from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";
export default function Accordion(props) {
return (
<div className={`group flex flex-col gap-2 p-5 ${props.id==='1'?'':'border-t border-gray-400'}`} tabIndex={props.id}>
    <div className="flex cursor-pointer items-center justify-between">
        <span className="text-xs md:text-xl group-focus:text-primary">{props.question}</span>
        <HiOutlineChevronDown className="h-4 w-4 md:w-8 md:h-8 transition-all duration-500 group-focus:-rotate-180"/>
    </div>
    <div className="invisible h-0 items-center opacity-0 transition-all group-focus:visible group-focus:h-auto group-focus:opacity-100 duration-300 text-justify text-2xs md:text-base">{props.answer}</div>
</div>
)
}