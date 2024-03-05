import React from 'react';
import {useSearchParams} from 'react-router-dom';

import Header from 'components/header';
import List from 'components/list';
import {Container} from 'components/globalComponents';
import {teamsList} from 'utils/teamsList';
import {Spinner} from 'components/spinner';
import {SearchInput} from 'components/searchInput';
import {Error} from 'pages/error';
import {useFetchTeams} from 'hooks/useFetchTeams';

export const Home: React.FC = () => {
    const [searchParams] = useSearchParams();
    const urlFilter = searchParams.get('search') ?? '';

    const {data: teams, isLoading, isError} = useFetchTeams();

    if (isError) {
        return <Error />;
    }

    if (isLoading) {
        return (
            <Container>
                <Header title="Looking for teams..." showBackButton={false} />
                <Spinner />
            </Container>
        );
    }

    const mapTeams = teamsList({teams});

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <SearchInput searchBy="team" urlFilter={urlFilter} />
            <List items={mapTeams} isLoading={isLoading} search={urlFilter} />
        </Container>
    );
};
