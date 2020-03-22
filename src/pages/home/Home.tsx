import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { About } from '../about/About';
import { Graphs } from '../graphs/Graphs';
import { Thoughts } from '../thoughts/Thoughts';
import { HamButton } from './components/HamButton';
import { Links } from './components/Links';
import { HomeWrapper } from './style';

export const Home = () => {
    return (
        <HomeWrapper>
            <HashRouter>
                <div className="header">
                    <div className="header-left">CAPERAL</div>
                    <div className="header-right">
                        <HamButton />
                    </div>
                </div>

                <div className="title">
                    <h1 className="spot-light" data-spotlight='Caperal'>Caperal</h1>
                    <br/>
                    <h2>Caper's cloudtown for  </h2>
                    <h2>Data Charts, React Library, Docs, Notes </h2>
                    <p>Here is Caper's playground for developing & technics</p>
                </div>

                <Links />

                <div className="main-view">
                    <Switch>
                        <Route path="/graphs" component={Graphs} />
                        <Route path="/thoughts" component={Thoughts} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </HashRouter>
        </HomeWrapper>
    );
};
