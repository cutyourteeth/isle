import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import './assets/css/solar.css';
import { Heartbeat } from './components/core/Heartbeat';
import { HamButton } from './pages/home/components/HamButton';

const Gallery = React.lazy(() => import('./pages/gallery/Gallery'));
const Home = lazy(() => import('./pages/home/Home'));
const SiteRecord = lazy(() => import('./pages/site-record/SiteRecord'));
const Solar = lazy(() => import('./pages/solar/Solar'));

const App: React.FC = () => {
    return (
        <AppWrapper>
            <HashRouter>
                <div className="header">
                    <div className="header-left">CAPERAL</div>
                    <div className="header-right">
                        <HamButton />
                    </div>
                </div>
                <React.Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Redirect from="/" exact={true} to="/home" />
                        <Route path="/home" component={Home} />
                        <Route path="/gallery" component={Gallery} />
                    </Switch>
                    <SiteRecord />
                    <Solar />
                </React.Suspense>
                <Heartbeat />
            </HashRouter>
        </AppWrapper>
    );
};

export default App;

const AppWrapper = styled.div`
    overflow-x: hidden;
    @media screen and (min-width: 1000px) {
        width: 90vw;
        margin: 0 auto;
        max-width: 1000px;
    }

    .header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 4rem;
        line-height: 4rem;
        padding: 0 2rem;
        text-transform: uppercase;
        box-sizing: border-box;
        color: rgb(102, 102, 102);

        .header-left {
            letter-spacing: 0.2rem;

            &:hover {
                color: white;
            }
        }

        .header-right {
            display: flex;
            flex-flow: row;
            position: relative;
            justify-content: center;
        }
    }
`;
