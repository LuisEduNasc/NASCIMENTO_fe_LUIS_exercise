import React, {useCallback, useEffect, useState} from 'react';
import {Search} from 'lucide-react';
import {useSearchParams} from 'react-router-dom';

import {useDebounceValue} from 'hooks/useDebounceValue';

import {Container, IconContainer, Input} from './styles';

interface Props {
    searchBy: 'team' | 'user';
    urlFilter: string;
}

export const SearchInput: React.FC<Props> = ({searchBy, urlFilter = ''}) => {
    const [searchValue, setSearchValue] = useState<string>(urlFilter);
    const [searchParams, setSearchParams] = useSearchParams();

    const debouncedValue = useDebounceValue(searchValue, 1000);

    const handleFilterTeams = useCallback(
        (search: string) => {
            if (!search && searchParams.has('search')) {
                searchParams.delete('search');
                setSearchParams(searchParams);
            } else if (search) {
                setSearchParams(params => {
                    params.set('search', search);

                    return params;
                });
            }
        },
        [searchParams, setSearchParams]
    );

    useEffect(() => {
        handleFilterTeams(debouncedValue);
    }, [debouncedValue, handleFilterTeams]);

    return (
        <Container>
            <IconContainer>
                <Search />
            </IconContainer>
            <Input
                placeholder={`Search ${searchBy} name...`}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
        </Container>
    );
};
