import axiosConfig from "../config/axiosConfig";

export const PingApi = async () => {
    try {
        const response = await axiosConfig.get("/ping");
        console.log(response.data);  
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};