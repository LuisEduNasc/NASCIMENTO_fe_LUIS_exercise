import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {SearchInput} from 'components/searchInput';

describe('components/searchInput', () => {
    it('it updates search value correctly', async () => {
        const {getByTestId} = render(
            <MemoryRouter>
                <SearchInput searchBy="team" urlFilter="" />
            </MemoryRouter>
        );

        const input = getByTestId('search-input');

        fireEvent.change(input, {target: {value: 'example'}});

        await waitFor(() => {
            expect(screen.getByTestId('search-input')).toHaveAttribute('value', 'example');
        });
    });

    it('it sets search params correctly', async () => {
        const {getByTestId} = render(
            <MemoryRouter>
                <SearchInput searchBy="team" urlFilter="" />
            </MemoryRouter>
        );

        const input = getByTestId('search-input');

        fireEvent.change(input, {target: {value: 'example'}});

        const urlParams = new URLSearchParams(window.location.search);

        await waitFor(() => {
            expect(screen.getByTestId('search-input')).toHaveAttribute('value', 'example');
            expect(urlParams).toContain('search=example');
        });
    });
});
