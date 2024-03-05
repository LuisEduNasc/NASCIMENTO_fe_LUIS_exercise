import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import {Router} from 'router';
import ErrorBoundary from 'components/errorBoundaries';

const queryClient = new QueryClient();

export function App() {
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </ErrorBoundary>
    );
}
