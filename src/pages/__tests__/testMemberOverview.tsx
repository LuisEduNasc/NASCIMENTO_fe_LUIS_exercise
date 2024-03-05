import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {MemberOverview} from 'pages/memberOverview';
import * as realUseFetchMember from 'hooks/useFetchMember';

jest.mock('hooks/useFetchMember', () => ({
    useFetchMember: jest.fn(),
}));

describe('pages/memberOverview', () => {
    it('should render UserOverview', () => {
        const memberData = {
            id: '1',
            firstName: 'Test',
            lastName: 'User',
            displayName: 'userName',
            location: 'location',
            avatarUrl: 'avatar',
        };

        jest.spyOn(realUseFetchMember, 'useFetchMember').mockImplementation(() => ({
            data: memberData,
            isLoading: false,
            isError: false,
        }));

        render(
            <MemoryRouter initialEntries={['/user/1']}>
                <MemberOverview />
            </MemoryRouter>
        );
        expect(screen.getByText('Test User')).toBeInTheDocument();
        expect(screen.getByText('userName')).toBeInTheDocument();
        expect(screen.getByText('location')).toBeInTheDocument();
    });
});
