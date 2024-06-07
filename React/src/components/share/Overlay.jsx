import React, { useEffect } from 'react'
import ReactDOM from "react-dom";
export default function Overlay({onHide,children}) {
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
    <div className="fixed inset-0 transition-all duration-300 z-20 backdrop-blur-sm bg-black/40 font-estedad text-gray-800" onClick={onHide}>
        {children}
    </div>
    ,document.getElementById("modals__parent")
);
}