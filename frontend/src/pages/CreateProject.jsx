import React from 'react'
import Layout from '../layout/Layout.jsx';
import Button from '../components/atoms/button/Button.jsx';
import {useCreateProject} from '../hooks/apis/mutation/useCreateProject.js';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
       const navigate = useNavigate();

       const {createProjectMutation, isPending} = useCreateProject();
       
       async function handleCreateProject() {
        try {
            const response = await createProjectMutation();
            navigate(`/project/${response.data.data}`);
        } catch (error) {
            console.log("Error creating project", error);
        }
    }

   

    return (
    <>
        <Layout>
          <div className="w-full p-10">
            <Button text={"Create Project"} handleCreateProject={handleCreateProject}/>
          </div>
        </Layout>
    </>
  )
}

export default CreateProject