import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { EstateGraph } from './components/EstateGraph';
import { PriceGraph } from './components/PriceGraph';

export const Graphs = () => {
    return (
        <div>
            <Link to="/graphs/estate">REAL-ESTATE</Link>
            <br/>
            <Link to="/graphs/price" className="link">
                PRICE
            </Link>
            <Switch>
                <Route path="/graphs/estate">
                    <EstateGraph />
                </Route>
                <Route path="/graphs/price">
                    <PriceGraph />
                </Route>
            </Switch>
        </div>
    );
};
