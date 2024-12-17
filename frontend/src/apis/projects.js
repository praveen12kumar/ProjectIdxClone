import axiosInstance from "../config/axiosConfig";
import axios from "axios";
export const createProjectApi = async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/projects`);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const getProjectTree = async ({projectId})=>{
        //console.log("Project ID", `${projectId}`);
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/projects/${projectId}/tree`);
        //console.log("response", response);
        return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

