import React, {useEffect, useState, useCallback} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {keepPreviousData, useQuery} from '@tanstack/react-query';

import {TeamOverview as ITeamOverview, ListItem, MemberData} from 'types';
import {getTeamOverview, getUserData} from 'api';
import {Container} from 'components/globalComponents';
import Header from 'components/header';
import List from 'components/list';
import {TeamLeadCard} from 'components/teamLeadCard';
import {membersList} from 'utils/membersList';
import {Spinner} from 'components/spinner';
import {Error} from 'pages/error';
import {SearchInput} from 'components/searchInput';

export const TeamOverview: React.FC = () => {
    const [membersListState, setMembersListState] = useState<ListItem[]>([]);
    const [isLoadingMembers, setIsLoadingMembers] = useState<boolean>(false);
    const {teamId} = useParams();
    const [searchParams] = useSearchParams();
    const urlFilter = searchParams.get('search') ?? '';

    const {
        data: teamData,
        isLoading: isLoadingTeam,
        isError: isErrorTeam,
    } = useQuery<ITeamOverview>({
        queryKey: ['get-team', teamId],
        queryFn: () => getTeamOverview(teamId),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
    });

    const teamLeadId = teamData?.teamLeadId;

    const {
        data: teamLeadData,
        isLoading: isLoadingTeamLead,
        isError: isErrorTeamLead,
    } = useQuery<MemberData>({
        queryKey: ['get-team-lead', teamId],
        queryFn: () => getUserData(teamData.teamLeadId),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60,
        enabled: !!teamLeadId,
    });

    const handleGetMembersList = useCallback(async () => {
        setIsLoadingMembers(true);
        const teamMembers = [];
        const teamMembersIds = teamData.teamMemberIds || [];

        for (var teamMemberId of teamMembersIds) {
            const data = await getUserData(teamMemberId);
            teamMembers.push(data);
        }

        setMembersListState(membersList({members: teamMembers ?? []}));
        setIsLoadingMembers(false);
    }, [teamData?.teamMemberIds]);

    useEffect(() => {
        if (!isLoadingTeam) {
            handleGetMembersList();
        }
    }, [isLoadingTeam, handleGetMembersList]);

    if (isErrorTeam || isErrorTeamLead) {
        return <Error />;
    }

    if (isLoadingTeam || isLoadingTeamLead) {
        return (
            <Container>
                <Header title="Looking for the team" showBackButton={false} />
                <Spinner />
            </Container>
        );
    }

    return (
        <Container>
            <Header title={`Team ${teamData.name}`} />
            <SearchInput searchBy="user" urlFilter={urlFilter} />
            {(!isLoadingTeam || isLoadingTeamLead) && TeamLeadCard({teamLeadData})}
            <List items={membersListState} isLoading={isLoadingMembers} search={urlFilter} />
        </Container>
    );
};
