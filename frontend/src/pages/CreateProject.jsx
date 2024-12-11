import React from 'react'
import Layout from '../layout/Layout.jsx';
import Button from '../components/atoms/button/Button.jsx';
import {useCreateProject} from '../hooks/apis/mutation/useCreateProject.js';

const CreateProject = () => {
       const {Header, Content, Footer} = Layout; 
       const {createProjectMutation, isPending} = useCreateProject();
       
       async function handleCreateProject() {
        try {
            console.log("Going to trigger Api");
            const response = await createProjectMutation();
            console.log(response);
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