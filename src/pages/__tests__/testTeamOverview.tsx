import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {TeamOverview} from 'pages/teamOverview';
import * as realUseFetchTeamOverview from 'hooks/useFetchTeamOverview';
import * as realUseFetchMember from 'hooks/useFetchMember';

jest.mock('hooks/useFetchTeamOverview', () => ({
    useFetchTeamOverview: jest.fn(),
}));
jest.mock('hooks/useFetchMember', () => ({
    useFetchMember: jest.fn(),
}));

describe('pages/teamOverview', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render team overview users', async () => {
        const teamOverview = {
            id: '1',
            name: 'Team 1',
            teamLeadId: '2',
            teamMemberIds: ['3', '4', '5'],
        };
        const userData = {
            id: '2',
            firstName: 'userData',
            lastName: 'userData',
            displayName: 'userData',
            location: '',
            avatar: '',
        };

        jest.spyOn(realUseFetchTeamOverview, 'useFetchTeamOverview').mockImplementation(() => ({
            data: teamOverview,
            isLoading: false,
            isError: false,
        }));
        jest.spyOn(realUseFetchMember, 'useFetchMember').mockImplementation(() => ({
            data: userData,
            isLoading: false,
            isError: false,
        }));

        render(
            <MemoryRouter initialEntries={['/team/1']}>
                <TeamOverview />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.queryAllByText('userData')).toHaveLength(1);
        });
    });
});
