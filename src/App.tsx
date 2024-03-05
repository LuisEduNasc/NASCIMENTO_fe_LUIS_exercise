import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {ErrorBoundary} from 'react-error-boundary';

import {Router} from 'router';
import {Error} from 'pages/error';

const queryClient = new QueryClient();

export function App() {
    return (
        <ErrorBoundary fallback={<Error />}>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </ErrorBoundary>
    );
}
