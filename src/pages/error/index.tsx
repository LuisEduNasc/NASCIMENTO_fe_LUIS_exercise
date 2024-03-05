import React from 'react';

import errorSvg from 'assets/svg/page-lost.svg';
import {ErrorContainer, ErrorPageDescription, ErrorPageTitle} from 'components/globalComponents';

export const Error: React.FC = () => {
    return (
        <ErrorContainer>
            <ErrorPageTitle>Error</ErrorPageTitle>
            <img src={errorSvg} width={400} height={400} alt="Error" />
            <ErrorPageDescription>Something went wrong, try again later!</ErrorPageDescription>
        </ErrorContainer>
    );
};
