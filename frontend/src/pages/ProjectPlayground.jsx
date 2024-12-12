import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditorComponent from '../components/molecules/editorComponent/EditorComponent';
import EditorButton from '../components/atoms/editorButton/EditorButton';
import TreeStructure from '../components/organisms/treeStructure/TreeStructure';
import { useTreeStructureStore } from '../store/treeStructureStore';

const ProjectPlayground = () => {
    const {projectId: projectIdFromUrl} = useParams();

    const {projectId,setProjectId} = useTreeStructureStore();

    useEffect(()=>{
      setProjectId(projectIdFromUrl);
    },[setProjectId, projectIdFromUrl]);


    
  return (
    
    <div className='w-full h-dvh '>
        <h1 className='text-xs text-white font-source px-2 py-1'><span className='font-medium text-sm font-poppins'>Project:</span> {projectIdFromUrl}</h1>
        
        <div className="w-1/5 h-full flex items-center bg-slate-900">

          <TreeStructure/>
         
        </div>
        
        
        
    </div>
  )
}

export default ProjectPlayground