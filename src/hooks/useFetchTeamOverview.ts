import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {getTeamOverview} from 'api';
import {TeamOverview} from 'types';

export const useFetchTeamOverview = ({teamId}: {teamId: string}) => {
    const {data, isLoading, isError} = useQuery<TeamOverview>({
        queryKey: ['get-team', teamId],
        queryFn: () => getTeamOverview(teamId),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
    });

    return {
        data,
        isLoading,
        isError,
    };
};
