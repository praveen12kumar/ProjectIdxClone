import React from 'react'
import { useParams } from 'react-router-dom'
import EditorComponent from '../components/molecules/editorComponent/EditorComponent';
import EditorButton from '../components/atoms/editorButton/EditorButton';
const ProjectPlayground = () => {
    const {projectId} = useParams();
  return (
    
    <>

        <h1>Project Id: {projectId}</h1>
        <EditorComponent/>
        <div className="flex">
        <EditorButton isActive={false}/>
        <EditorButton isActive={true}/>
        </div>
    </>
  )
}

export default ProjectPlayground