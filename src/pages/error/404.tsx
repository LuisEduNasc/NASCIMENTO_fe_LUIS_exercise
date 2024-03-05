import React from 'react';

import errorSvg from 'assets/svg/page-lost.svg';
import {ErrorContainer, ErrorPageDescription, ErrorPageTitle} from 'components/globalComponents';

export const NotFound: React.FC = () => {
    return (
        <ErrorContainer>
            <ErrorPageTitle>404</ErrorPageTitle>
            <img src={errorSvg} width={400} height={400} alt="Error" />
            <ErrorPageDescription>Page not found!</ErrorPageDescription>
        </ErrorContainer>
    );
};
