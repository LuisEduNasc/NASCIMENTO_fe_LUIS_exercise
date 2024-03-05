import {ListItem, MemberData} from 'types';

export const membersList = ({members}: {members: MemberData[]}) => {
    const MapMembers = members.map(member => {
        const columns = [
            {
                key: 'Name',
                value: `${member.firstName} ${member.lastName}`,
            },
            {
                key: 'Display Name',
                value: member.displayName,
            },
            {
                key: 'Location',
                value: member.location,
            },
        ];

        return {
            id: member.id,
            url: `/user/${member.id}`,
            columns,
            navigationProps: member,
        } as ListItem;
    });

    return MapMembers;
};
