import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import { EstateGraph } from './EstateGraph';
import { PriceGraph } from './PriceGraph';

export const Graphs = () => {
    return (
        <div>

            <Switch>
                <Route path="/home/graphs/estate">
                    <EstateGraph />
                </Route>
                <Route path="/home/graphs/price">
                    <PriceGraph />
                </Route>
                <Route path="/home/graphs/marketing">Market data not available still digging</Route>
            </Switch>
        </div>
    );
};

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;
