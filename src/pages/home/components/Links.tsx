import React from 'react';
import styled from 'styled-components';
import StyledLink from '../../../components/core/StyledLink';

export const Links = () => {
    return (
        <LinksWrapper>
            <StyledLink to="/graphs">Graphs</StyledLink>
            <StyledLink to="/thoughts">Thoughts</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </LinksWrapper>
    );
};

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;
