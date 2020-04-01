import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../about/About';
import { Graphs } from '../graphs/Graphs';
import { Links } from './components/Links';
import { HomeWrapper } from './style';

export const Home = () => {
    return (
        <HomeWrapper>
            <div className="title">
                <h1 className="spot-light" data-spotlight="Caperal">
                    Caperal
                </h1>
                <br />
                <h2>Caper's spacetown for </h2>
                <h2>Data Charts, React Library, Docs, Notes </h2>
                <p>
                    For now, I'm developing &emsp;
                    <span role="img" aria-label="gear">
                        ⚙️ Gearware ⚙️
                    </span>
                </p>
            </div>

            <Links />

            <div className="main-view">
                <Switch>
                    <Route path="/home/graphs" component={Graphs} />
                    <Route path="/home/about" component={About} />
                </Switch>
            </div>
        </HomeWrapper>
    );
};
