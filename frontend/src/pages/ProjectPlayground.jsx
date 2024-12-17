import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditorComponent from '../components/molecules/editorComponent/EditorComponent';
import EditorButton from '../components/atoms/editorButton/EditorButton';
import TreeStructure from '../components/organisms/treeStructure/TreeStructure';
import { useTreeStructureStore } from '../store/treeStructureStore';
import { useEditorSocketStore } from '../store/editorSocketStore';
import {io} from "socket.io-client";

const ProjectPlayground = () => {
    const {projectId: projectIdFromUrl} = useParams();
    console.log("ProjectId", projectIdFromUrl);

    const {projectId, setProjectId} = useTreeStructureStore();

    const { setEditorSocket}  = useEditorSocketStore();  
    
    useEffect(()=>{
      if(projectIdFromUrl){
        setProjectId(projectIdFromUrl);
        const editorSocketConnection = io(`${import.meta.env.VITE_BACKEND_URL}/editor`,{
          query:{
            projectId: projectIdFromUrl
          }
        });
        setEditorSocket(editorSocketConnection);
      }
    },[setProjectId, projectIdFromUrl, setEditorSocket]);


    
  return (
    
    <div className='w-full h-dvh '>
        <h1 className='text-xs text-white font-source px-2 py-1'><span className='font-medium text-sm font-poppins'>Project:</span> {projectIdFromUrl}</h1>
        
       <div className="w-full h-full flex">
       <div className="w-1/5 h-full flex items-center bg-slate-900">
          {
           projectId && <TreeStructure/>
          }
 
        </div>
        <div className="w-4/5 h-full">
        <EditorComponent/>
        </div>  
        
        </div>      
    </div>
  )
}

export default ProjectPlayground