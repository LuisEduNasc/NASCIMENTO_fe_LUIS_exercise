import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;

export const IconContainer = styled.div`
    position: absolute;
    left: 12px;
    top: 56%;
    transform: translateY(-50%);
`;

export const Input = styled.input`
    width: 320px;
    padding: 16px 16px 16px 42px;
    background-color: #fff;
    border: none;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border-radius: 30px;

    &::placeholder {
        color: #cfcfcf;
        font-size: 16px;
    }
`;
