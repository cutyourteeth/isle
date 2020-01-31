import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import StyledLink from '../../components/core/StyledLink';
import { EstateGraph } from './components/EstateGraph';
import { PriceGraph } from './components/PriceGraph';

export const Graphs = () => {
    return (
        <div>
            <LinksWrapper>
                <StyledLink to="/graphs/estate">Real-Estate</StyledLink>
                <StyledLink to="/graphs/price">Price</StyledLink>
            </LinksWrapper>
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

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;
