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


export const getProjectTree = async ({projectId})=>{
        //console.log("Project ID", `${projectId}`);
    try {
        const response = await axiosInstance.get(`/projects/${projectId}/tree`);
        //console.log("response", response);
        return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

