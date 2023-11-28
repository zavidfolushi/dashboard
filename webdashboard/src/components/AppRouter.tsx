import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../routes';
import PageWrapper from './PageWrapper';

const AppRouter: FC = () => {
    return (
        <PageWrapper>
            <Routes>
                {routes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                )}
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
        </PageWrapper>
    );
};

export default AppRouter;