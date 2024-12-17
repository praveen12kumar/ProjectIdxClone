import React from 'react'
import { FaSquareJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";



const FileIcon = ({extension}) => {
  //console.log("extension", extension);
  const iconStyle = "w-5 h-5 mr-1 hover:opacity-90 transition-all ease-in-out duration-300";
  const IconMapper = {
        "js": <FaSquareJs className={` text-yellow-500 ${iconStyle} `} />,
        "jsx" : <GrReactjs className={`text-blue-800 w-4 h-4 mr-1 ${iconStyle}`} />,
        "css": <FaCss3 className={`text-[#3c99dc] ${iconStyle}`}/>,
        "html": <FaHtml5 className={`text-orange-700 ${iconStyle}`}/>,
        "json": <FaNodeJs className={`text-green-600 ${iconStyle}`}/>,
        
      } 

  return (
    <>
         {
          IconMapper[extension]
         }
    </>
  )
}

export default FileIcon