import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import StyledLink from '../../components/core/StyledLink';
import { EstateGraph } from './EstateGraph';
import { PriceGraph } from './PriceGraph';

export const Graphs = () => {
    return (
        <div>
            <LinksWrapper>
                <StyledLink to="/graphs/estate">Real Estate</StyledLink>
                <StyledLink to="/graphs/price">Price</StyledLink>
                {/* TODO */}
                <StyledLink to="/graphs/marketing">Marketing</StyledLink>
            </LinksWrapper>
            <Switch>
                <Route path="/graphs/estate">
                    <EstateGraph />
                </Route>
                <Route path="/graphs/price">
                    <PriceGraph />
                </Route>
                <Route path="/graphs/marketing">Market data not available still digging</Route>
            </Switch>
        </div>
    );
};

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;
