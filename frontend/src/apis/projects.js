import axiosInstance from "../config/axiosConfig";
export const createProjectApi = async () => {
    try {
        const response = await axiosInstance.post("/projects");
        console.log(response.data);  
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};