import React from 'react'
export default function SectionTitle(props) {
return (
    <h2 className={`font-estedadBold md:text-2xl ${props.center?'mx-auto text-center':''} ${props.color}`}>{props.title}</h2>
)
}