import React,{useState} from 'react'
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io"
import FileIcon from '../../atoms/fileIcon/FileIcon';


const TreeNode = ({fileFolderData}) => {
     console.log("fileFolder data",fileFolderData);
    
    const [visibility, setVisibility] = useState({})
    
    function toggleVisibility(name){
        console.log(name);
        setVisibility({
            ...visibility,
            [name]: !visibility[name]
        })
    }

    const computeExtension = (fileFolderData) => {
        const names = fileFolderData?.name?.split(".");
        return names[names.length - 1];
    }

  return (
    
   <>
  
   {
    fileFolderData && 
    <div className='pl-4 text-white'>
    {
        fileFolderData?.children /* check if the current node is a folder */ ? 
         /** if the current node is a folder, render it as a button */
            (<button 
                onClick={()=>toggleVisibility(fileFolderData?.name)}
                className='flex items-center text-sm text-white bg-transparent py-2 rounded-sm outline-none cursor-pointer'>
                {
                    visibility[fileFolderData?.name] ? <IoIosArrowDown/> : <IoIosArrowForward/>
                }
                {
                    fileFolderData?.name
                }
            </button>):
            /** if the current is not a render it as a file */
            (
               <div className="flex items-center justify-start ">
                   <FileIcon extension={computeExtension(fileFolderData) }/>
                   <p className='text-sm cursor-pointer py-2'>
                    {
                    fileFolderData?.name
                    }
                    </p>
               </div>
            )
    }
    {
        visibility[fileFolderData?.name] && fileFolderData?.children && (
            fileFolderData?.children?.map((child)=>{
                return(
                    <TreeNode fileFolderData={child} key={child?.name}/>
                )
            })
        )
    }
    </div>
   }
   </>
  )
}

export default TreeNode