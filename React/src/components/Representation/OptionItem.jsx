import React from 'react'
export default function OptionItem(props) {
return (
<div className="flex flex-col items-center gap-2 md:gap-4 w-28 md:w-44">
    <span className="border-4 border-primary rounded-full p-7 child:w-10 child:md:w-20 child:h-10 child:md:h-20 text-primary">
        {props.icon}
    </span>
    <h3 className="text-center flex-shrink-0">{props.title}</h3>
</div>
)
}