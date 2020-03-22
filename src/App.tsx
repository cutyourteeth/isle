import React from 'react';
import styled from 'styled-components';
import { Home } from './pages/home/Home';
import { SiteRecord } from './pages/site-record/SiteRecord';

const App: React.FC = () => {
    return (
        <>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Pined>
                <Home />
                <SiteRecord />
            </Pined>
        </>
    );
};

const Pined = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y:auto;
`;

export default App;
