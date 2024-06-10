import React from 'react'
export default function OptionItem(props) {
return (
<div className={`flex flex-col items-center md:gap-4 text-2xs md:text-lg text-center xs:flex-shrink-0 md:py-4 ${props.center?'px-3 xs:px-4 sm:px-10 md:px-6 lg:px-16 xl:px-24':''} ${props.left?'pr-3 xs:pr-4 sm:pr-10 md:pr-6 lg:pr-16 xl:pr-24':''} ${props.right?'pl-3 xs:pl-4 sm:pl-10 md:pl-6 lg:pl-16 xl:pl-24':''}`}>
    <span className='w-4 h-4 md:w-12 md:h-14 child:w-full child:h-full'>{props.icon}</span>
    <h4 className="text-gray-700">{props.title}</h4>
</div>
)
}