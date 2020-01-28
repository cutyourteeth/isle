import React from 'react';
import { Route } from 'react-router';
import { EstateGraph } from './components/EstateGraph';

export const Graphs = () => {
    return <div>
        <Route path="/graph/estate">
            <EstateGraph/>
        </Route>
        <Route path="/graph/price">
            <EstateGraph/>
        </Route>
    </div>;
};