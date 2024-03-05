import React from 'react';
import {useParams} from 'react-router-dom';
import {keepPreviousData, useQuery} from '@tanstack/react-query';

import {Container} from 'components/globalComponents';
import Header from 'components/header';
import {MemberCard} from 'components/memberCard';
import {MemberData} from 'types';
import {getUserData} from 'api';
import {Spinner} from 'components/spinner';
import {Error} from 'pages/error';

export const MemberOverview: React.FC = () => {
    const params = useParams();
    const {userId} = params;

    const {
        data: memberData,
        isLoading,
        isError,
    } = useQuery<MemberData>({
        queryKey: ['get-member', userId],
        queryFn: () => getUserData(userId),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
    });

    if (isError) {
        return <Error />;
    }

    if (isLoading) {
        return (
            <Container>
                <Header title="Looking for the user..." showBackButton={false} />
                <Spinner />
            </Container>
        );
    }

    return (
        <Container>
            <Header title={`User ${memberData.firstName} ${memberData.lastName}`} />
            {MemberCard({memberData})}
        </Container>
    );
};
