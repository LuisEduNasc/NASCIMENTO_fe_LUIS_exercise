import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {Home} from 'pages/home';
import {TeamOverview} from 'pages/teamOverview';
import {MemberOverview} from 'pages/memberOverview';
import {NotFound} from 'pages/error/404';
import {Error} from 'pages/error';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: '/team/:teamId',
        element: <TeamOverview />,
        errorElement: <Error />,
    },
    {
        path: '/user/:userId',
        element: <MemberOverview />,
        errorElement: <Error />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export const Router = () => {
    return <RouterProvider router={routes} />;
};
