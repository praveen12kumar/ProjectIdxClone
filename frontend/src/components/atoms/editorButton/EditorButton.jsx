import React,{useState} from 'react'
import { RxCross2 } from "react-icons/rx";


function EditorButton  ({isActive}) {
    const [activeBtn, setActiveBtn] = useState(false);

    function handleClick(){
        //todo

    }
  return (
    <div 
    onMouseEnter={() => setActiveBtn(true)}
    onMouseLeave={() => setActiveBtn(false)}
    className={`min-w-28 w-40 h-8 flex items-center justify-between px-5 text-sm border-t-2  py-1 ${isActive ? "text-white bg-[#303242] border-pink-700": "text-slate-500 bg-[#4a4859] border-none "} font-mono  outline-none`}
    >
        <button 
            onClick={handleClick}
        >
            file.js
        </button>
        {
            activeBtn && <RxCross2 className={`text-xl  ${isActive ? "text-white bg-[#303242]" : "bg-[#4a4859]"} cursor-pointer shadow-2xl `}/>
        }
    </div>

    )
  
}

export default EditorButton