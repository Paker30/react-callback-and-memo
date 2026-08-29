import React, {useEffect} from 'react';

export const Header = ({printConfiguration, configuration}) => {

    printConfiguration();

    return <div><h1>Stale closure</h1><h2>{configuration?.title}</h2></div>;
};