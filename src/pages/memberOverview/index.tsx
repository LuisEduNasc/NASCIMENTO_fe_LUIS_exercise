import React from 'react';
import {useParams} from 'react-router-dom';

import {Container} from 'components/globalComponents';
import Header from 'components/header';
import {MemberCard} from 'components/memberCard';
import {Spinner} from 'components/spinner';
import {Error} from 'pages/error';
import {useFetchMember} from 'hooks/useFetchMember';

export const MemberOverview: React.FC = () => {
    const params = useParams();
    const {userId} = params;

    const {
        data: memberData,
        isLoading,
        isError,
    } = useFetchMember({key: 'get-member', memberId: userId});

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
