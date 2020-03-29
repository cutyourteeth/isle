import React from 'react';
import './assets/css/solar.css';
import { Heartbeat } from './components/core/Heartbeat';
import { Home } from './pages/home/Home';
import { SiteRecord } from './pages/site-record/SiteRecord';
import { Solar } from './pages/solar/Solar';

const App: React.FC = () => {
    return (
        <>
            <Home />
            <SiteRecord />
            <Solar/>
            <Heartbeat />
        </>
    );
};

export default App;
