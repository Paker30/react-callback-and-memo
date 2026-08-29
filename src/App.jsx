import React, {useState, useCallback} from 'react';
import {Header} from './Header.jsx';
import {Footer} from './Footer.jsx';

export const App = () => {

    const [configuration, setConfiguration] = useState();
    const printConfigurationRef = React.useRef(() => {
        console.log('Current REF configuration:', configuration);
    });

    const printConfiguration = useCallback(()  => {
        console.log('Current configuration:', configuration);
    }, []);
    
    return (
    <div>
        <Header printConfiguration={printConfiguration} configuration={configuration} />
        <button onClick={() => setConfiguration({title: 'Updated Configuration'})}>Change configuration</button>
        <Footer printConfiguration={printConfigurationRef.current} />
    </div>
    );
};