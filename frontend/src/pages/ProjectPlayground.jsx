import React from 'react'
import { useParams } from 'react-router-dom'
import EditorComponent from '../components/molecules/editorComponent/EditorComponent';
const ProjectPlayground = () => {
    const {projectId} = useParams();
  return (
    
    <>
        <h1>Project Id: {projectId}</h1>
        <EditorComponent/>
    </>
  )
}

export default ProjectPlayground