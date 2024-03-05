import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ErrorContainer = styled.div`
    flex: 1;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ErrorPageTitle = styled.p`
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ErrorPageDescription = styled.p`
    font-size: 22px;
    color: #929292;
`;
