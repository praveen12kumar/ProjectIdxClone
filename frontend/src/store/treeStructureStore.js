import {create} from 'zustand';
import { getProjectTree } from '../apis/projects';
import { QueryClient } from '@tanstack/react-query';

export const useTreeStructureStore = create((set, get) => {
    
    
    const queryClient = new QueryClient();

    return{
        projectId: null,
        treeStructure: null,
        
        setTreeStructure: async ()=>{
            const id = get().projectId;
            const data = await queryClient.fetchQuery({
                queryFn: ()=> getProjectTree(id),
                queryKey:[`tree-structure-${id}`]
            }); 
            set({
                treeStructure:data
            })
        },

        setProjectId:(projectId)=>{
            set({
                projectId: projectId
            })
        }

    }
})