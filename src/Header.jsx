import React, { useEffect } from 'react';

export const Header = ({ configuration, children }) => {

    console.log('Header re-load');

    useEffect(() => {
        console.log('Header useEffect: "configuration" has changed');
    }, [configuration]);

    useEffect(() => {
        console.log('Header useEffect: "children" has changed');
    }, [children]);

    return (<header>{children}</header>);
};