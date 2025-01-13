import React from 'react'
import { useFileContextMenuStore } from '../../../../store/fileContextMenuStore'
import { useEditorSocketStore } from '../../../../store/editorSocketStore';

const FileContextMenu = ({x, y, path, }) => {
    
    const {setIsOpen} = useFileContextMenuStore();
    const {editorSocket} = useEditorSocketStore();


    function handleFileDelete(e){
        e.preventDefault();
        //console.log("file delete", path);
        editorSocket.emit("deleteFile", {
            pathToFileOrFolder: path
        });

    }

    function handleFileRename(){

    }

  return (
    <div 
        onMouseLeave={()=>setIsOpen(false)}
        className={`w-36 text-gray-100 flex flex-col rounded-md  items-start bg-[#333333] z-40 `}
            style={{position:"fixed", top: y, left: x}}
        >
        <button className='w-full hover:bg-[#444444] p-1 rounded-md border-none outline-none cursor-pointer'
            onClick={handleFileDelete}
            >Delete</button>
        <button
            className='w-full hover:bg-[#444444] p-1 rounded-md border-none outline-none cursor-pointer' 
            onClick={handleFileRename}
        >Rename</button>

    </div>
  )
}

export default FileContextMenu;