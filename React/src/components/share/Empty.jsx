import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Empty(props) {
return (
<div className="bg-buy-empty bg-no-repeat bg-center flex-center flex-col text-xs border px-8 border-gray-400 rounded-lg py-24 md:py-48">
{/* empty caption */}
<p className="text-gray-700 md:text-2xl">{props.caption}</p>
{/* menu btn */}
{props.btn?<NavLink to={props.href} className="text-primary rounded border border-primary p-2 h-8 w-40 mt-4 md:font-estedadMedium md:text-base md:px-4 flex-center md:mt-8">{props.btn}</NavLink>:null}
</div>
)
}
