import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Teams, MemberData} from 'types';
import {AvatarContainer, Container, InfoContainer, InfoTitle} from './styles';

interface Props {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: MemberData | Teams;
}

const Card = ({
    id,
    columns,
    url,
    hasNavigation = true,
    navigationProps = null,
}: Props): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Container
            data-testid={`cardContainer-${id}`}
            hasNavigation={hasNavigation}
            onClick={(e: Event) => {
                if (hasNavigation) {
                    navigate(url, {
                        state: navigationProps,
                    });
                }
                e.preventDefault();
            }}
        >
            {navigationProps && 'avatarUrl' in navigationProps ? (
                <AvatarContainer>
                    <img src={navigationProps.avatarUrl} width={45} height={45} alt="Avatar" />
                </AvatarContainer>
            ) : null}

            {columns.map(({key: columnKey, value}) => (
                <InfoContainer key={columnKey}>
                    <InfoTitle>{columnKey}</InfoTitle>
                    <p>
                        <strong>{value}</strong>
                    </p>
                </InfoContainer>
            ))}
        </Container>
    );
};

export default Card;
