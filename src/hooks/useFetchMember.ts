import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {getUserData} from 'api';
import {MemberData} from 'types';

export const useFetchMember = ({key, memberId}: {key: string; memberId: string}) => {
    const {data, isLoading, isError} = useQuery<MemberData>({
        queryKey: [key, memberId],
        queryFn: () => getUserData(memberId),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
        enabled: !!memberId,
    });

    return {
        data,
        isLoading,
        isError,
    };
};
