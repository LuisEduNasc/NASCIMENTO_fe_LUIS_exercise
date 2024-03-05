import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {getTeams} from 'api';
import {Teams} from 'types';

export const useFetchTeams = () => {
    const {data, isLoading, isError} = useQuery<Teams[]>({
        queryKey: ['get-teams'],
        queryFn: async () => getTeams(),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
    });

    return {
        data,
        isLoading,
        isError,
    };
};
