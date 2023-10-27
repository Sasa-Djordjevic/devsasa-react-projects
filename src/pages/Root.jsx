import React, {Fragment} from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/UI/MainNavigation';
import FooterNavigation from '../components/UI/FooterNavigation';

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <FooterNavigation />
        </Fragment>
    );
};

export default RootLayout;