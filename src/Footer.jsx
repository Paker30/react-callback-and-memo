import React from 'react';

import { singleton } from './closure';

export const Footer = () => {
    return <div><h1>{singleton('I am the Footer!')}</h1></div>;
};