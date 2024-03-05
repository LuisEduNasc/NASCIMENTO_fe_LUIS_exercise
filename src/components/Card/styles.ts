import styled from 'styled-components';

export const Container = styled.div<{hasNavigation: boolean}>`
    position: relative;
    display: grid;
    gap: 12px;
    border: none;
    border-radius: 6px;
    background: #fff;
    padding: 16px;
    width: 300px;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`;

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
`;

export const InfoContainer = styled.div``;

export const InfoTitle = styled.div`
    color: #929292;
    font-size: 12px;
`;
