import React, { useEffect } from 'react';

export const Header = ({ configuration }) => {

    console.log('Header re-load');

    useEffect(() => {
        console.log('Header useEffect: "configuration" has changed');
    }, [configuration]);

    return (<header>header</header>);
};