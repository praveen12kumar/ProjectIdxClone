import React, {useEffect, } from 'react'
import { useTreeStructureStore } from '../../../store/treeStructureStore'
import TreeNode from '../../molecules/tree/TreeNode';

const TreeStructure = () => {
    const {treeStructure, setTreeStructure} = useTreeStructureStore()
   
    useEffect(()=>{
        if(treeStructure){
            console.log("treeStructure",treeStructure);
        }
        else{
            setTreeStructure();
        }
    },[ setTreeStructure, treeStructure]);


  return (
    <div className='h-full w-full'>
        <TreeNode fileFolderData={treeStructure}/>
    </div>
  )
}

export default TreeStructure