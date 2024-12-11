import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectPlayground = () => {
    const {projectId} = useParams();
  return (
    
    <>
        <h1>Project Id: {projectId}</h1>
    </>
  )
}

export default ProjectPlayground