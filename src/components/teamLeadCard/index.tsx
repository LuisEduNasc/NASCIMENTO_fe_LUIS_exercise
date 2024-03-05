import React from 'react';

import Card from 'components/card';
import {MemberData} from 'types';

export const TeamLeadCard: React.FC<{teamLeadData: MemberData}> = ({teamLeadData}) => {
    const columns = [
        {
            key: 'Team Lead',
            value: '',
        },
        {
            key: 'Name',
            value: `${teamLeadData.firstName} ${teamLeadData.lastName}`,
        },
        {
            key: 'Display Name',
            value: teamLeadData.displayName,
        },
        {
            key: 'Location',
            value: teamLeadData.location,
        },
    ];

    return (
        <Card columns={columns} url={`/user/${teamLeadData.id}`} navigationProps={teamLeadData} />
    );
};
