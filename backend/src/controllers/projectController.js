import { createProjectService, getProjectTreeService } from "../services/projectService.js"

export const  createProjectController = async(req, res) => {
    try {
        const projectId = await createProjectService();
        console.log("project Id create controller", projectId);
        
        return res.json({
            success:true,
            data:projectId,
            message:'Project created',
            error:{}
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            data:{},
            message:'Error creating project',
            error:error
        })
    }
}


export const getProjectTree = async(req, res)=>{
    try {
        console.log("project Id", req.params.projectId);
        
        const tree = await getProjectTreeService(req.params.projectId);
        console.log("tree controller", tree);
        
        return res.json({
            data:tree,
            success:true,
            message:"Project tree fetched successfully",
            error:{}
    })
    } catch (error) {
        console.log(error);
        return res.json({
            data:{},
            success:false,
            message:"Error fetching project tree",
            error:error
        })
    }
}