import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {Home} from 'pages/home';
import * as realUseFetchTeams from 'hooks/useFetchTeams';

jest.mock('hooks/useFetchTeams', () => ({
    useFetchTeams: jest.fn(),
}));

describe('pages/home', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.clearAllMocks();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should render spinner while loading', async () => {
        jest.spyOn(realUseFetchTeams, 'useFetchTeams').mockImplementation(() => ({
            data: [],
            isLoading: true,
            isError: false,
        }));

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByText('Looking for teams...')).toBeInTheDocument();
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    it('should render teams list', async () => {
        jest.spyOn(realUseFetchTeams, 'useFetchTeams').mockImplementation(() => ({
            data: [
                {
                    id: '1',
                    name: 'Team1',
                },
                {
                    id: '2',
                    name: 'Team2',
                },
            ],
            isLoading: false,
            isError: false,
        }));

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        await waitFor(() => {
            expect(screen.getByText('Team1')).toBeInTheDocument();
        });
        expect(screen.getByText('Team2')).toBeInTheDocument();
    });
});
