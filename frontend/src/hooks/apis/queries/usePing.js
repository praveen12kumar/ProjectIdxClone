import { PingApi } from "../../../apis/ping";
import {useQuery} from "@tanstack/react-query";

export default function usePing(){
    const{isLoading, isError, error, data} = useQuery({
        queryFn:PingApi,
        queryKey:['ping'],
        staleTime: 10 * 1000
    });

    return {isLoading, isError, error, data};
}