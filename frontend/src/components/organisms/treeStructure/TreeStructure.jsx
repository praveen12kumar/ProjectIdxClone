import React, {useEffect } from 'react'
import { useTreeStructureStore } from '../../../store/treeStructureStore'
import TreeNode from '../../molecules/tree/TreeNode';
import { useFileContextMenuStore } from '../../../store/fileContextMenuStore';
import FileContextMenu from '../../molecules/contextMenu/fileContextMenu/FileContextMenu';
import { useFolderContextMenuStore } from '../../../store/FolderContextMenuStore';
import FolderContextMenu from '../../molecules/contextMenu/folderContextMenu/FolderContextMenu';

const TreeStructure = () => {
    const {treeStructure, setTreeStructure} = useTreeStructureStore()
    const {isOpen:isFileContextOpen, x:fileContextX, y:fileContextY, file} = useFileContextMenuStore();
    const {isOpen:isFolderContextOpen, x:folderContextX, y:folderContextY, folder} = useFolderContextMenuStore();


    useEffect(()=>{
        if(treeStructure){
            //console.log("tree: ",treeStructure);
        }
        else{
            setTreeStructure();
        }
    },[ setTreeStructure, treeStructure]);


  return (
    <>
    {
        isFileContextOpen && fileContextX && fileContextY && (
            <FileContextMenu x={fileContextX} y={fileContextY} path={file}/>
        )
    }
    {
        isFolderContextOpen && folderContextX && folderContextY && (
            <FolderContextMenu x={folderContextX} y={folderContextY} path={folder}/>
        )
    }

    <div className='h-full w-full'>
        <TreeNode fileFolderData={treeStructure}/>
    </div>
    </>
  )
}

export default TreeStructure