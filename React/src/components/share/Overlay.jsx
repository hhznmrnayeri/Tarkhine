import React, { useEffect } from 'react'
import ReactDOM from "react-dom";
export default function Overlay({onHide,children,backgroundNone}) {
    useEffect(() => {
        const checkKey = (event) => {
            if (event.keyCode === 27) {
            onHide();
            }
        };
        window.addEventListener("keydown", checkKey);
        return () => window.removeEventListener('keydown', checkKey)
    });
return ReactDOM.createPortal(
    <div className={`fixed inset-0 transition-all duration-300 z-20 font-estedad text-gray-800 ${backgroundNone?'bg-black/0':'backdrop-blur-sm bg-black/40'}`} onClick={(e)=>{e.target.parentElement.id==='modals__parent'?onHide():null;
    }}>
        {children}
    </div>
    ,document.getElementById("modals__parent")
);
}