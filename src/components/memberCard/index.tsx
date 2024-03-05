import React from 'react';

import Card from 'components/card';
import {MemberData} from 'types';

export const MemberCard: React.FC<{memberData: MemberData}> = ({memberData}) => {
    const columns = [
        {
            key: 'Name',
            value: `${memberData.firstName} ${memberData.lastName}`,
        },
        {
            key: 'Display Name',
            value: memberData.displayName,
        },
        {
            key: 'Location',
            value: memberData.location,
        },
    ];

    return <Card columns={columns} hasNavigation={false} navigationProps={memberData} />;
};
