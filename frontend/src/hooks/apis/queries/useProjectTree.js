import {useQuery} from '@tanstack/react-query';
import { getProjectTree } from '../../../apis/projects';
export const useProjectTree = (projectId)=>{
    const {isLoading, isError, projectTree, error} = useQuery({
        queryFn:getProjectTree({projectId})
    });

    return{
        isError,
        isLoading,
        projectTree,
        error
    }
}