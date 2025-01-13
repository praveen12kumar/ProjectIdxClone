import React from 'react'
import { useFolderContextMenuStore } from '../../../../store/FolderContextMenuStore';
import { useEditorSocketStore } from '../../../../store/editorSocketStore';


const FolderContextMenu = ({x, y, path, }) => {
    
    const {setIsOpen} = useFolderContextMenuStore();
    const {editorSocket} = useEditorSocketStore();


    function handleDeleteFolder(e){
        e.preventDefault();
        //console.log("folder delete", path);
        editorSocket.emit("deleteFolder", {
            pathToFileOrFolder: path
        });
    }

    function handleCreateFolder(e){}

    function handleRenameFolder(){

    }

  return (
    <div 
        onMouseLeave={()=>setIsOpen(false)}
        className={`w-36 text-gray-100 flex flex-col rounded-md  items-start bg-[#333333] z-40 `}
            style={{position:"fixed", top: y, left: x}}
        >
        <button className='w-full hover:bg-[#444444] p-1 rounded-md border-none outline-none cursor-pointer'
            onClick={handleCreateFolder}
        >Create Folder</button>
        <button className='w-full hover:bg-[#444444] p-1 rounded-md border-none outline-none cursor-pointer'
            onClick={handleDeleteFolder}
            >Delete Folder</button>
        <button
            className='w-full hover:bg-[#444444] p-1 rounded-md border-none outline-none cursor-pointer' 
            onClick={handleRenameFolder}
        >Rename Folder</button>

    </div>
  )
}

export default FolderContextMenu