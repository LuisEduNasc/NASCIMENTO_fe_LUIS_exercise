import {ListItem, Teams as TeamsList} from 'types';

export const teamsList = ({teams}: {teams: TeamsList[]}) => {
    const MapTeams = teams.map(team => {
        const columns = [
            {
                key: 'Name',
                value: team.name,
            },
        ];

        return {
            id: team.id,
            url: `/team/${team.id}`,
            columns,
            navigationProps: team,
        } as ListItem;
    });

    return MapTeams;
};
