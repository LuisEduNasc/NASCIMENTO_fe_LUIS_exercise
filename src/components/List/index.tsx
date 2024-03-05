import React from 'react';

import {ListItem} from 'types';
import Card from 'components/card';
import {Spinner} from 'components/spinner';
import {Container} from './styles';

interface Props {
    items?: ListItem[];
    hasNavigation?: boolean;
    isLoading?: boolean;
    search?: string;
}

const List = ({items = [], hasNavigation = true, isLoading, search}: Props) => {
    let filteredItems = items;

    if (search) {
        filteredItems = items.filter(item => {
            return item.columns.some(
                column =>
                    typeof column.value === 'string' &&
                    typeof search === 'string' &&
                    column.value.toLowerCase().includes(search.toLowerCase())
            );
        });
    }

    return (
        <Container>
            {isLoading && <Spinner />}
            {!isLoading &&
                filteredItems.map(({url, id, columns, navigationProps}, index) => {
                    return (
                        <Card
                            key={`${id}-${index}`}
                            id={id}
                            columns={columns}
                            navigationProps={navigationProps}
                            hasNavigation={hasNavigation}
                            url={url}
                        />
                    );
                })}
        </Container>
    );
};

export default List;
