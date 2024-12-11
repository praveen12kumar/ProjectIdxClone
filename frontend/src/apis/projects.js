import axiosInstance from "../config/axiosConfig";
export const createProjectApi = async () => {
    try {
        const response = await axiosInstance.post("/projects");
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};