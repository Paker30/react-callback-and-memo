import React from 'react';

import { singleton } from './closure';

export const Header = () => {
    return <div><h1>{singleton('I am the Header!')}</h1></div>;
};