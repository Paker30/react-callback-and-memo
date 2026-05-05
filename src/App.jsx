import React from 'react';
import {Header} from './Header.jsx';
import {Footer} from './Footer.jsx';
import { singleton } from './closure';

export const App = () => {
    singleton('App content');
    return <div>
        <Header />
        <Footer />
    </div>;
};