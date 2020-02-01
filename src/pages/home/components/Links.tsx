import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import StyledLink from '../../../components/core/StyledLink';

const firstLevelRoutes = [
    { urlParam: 'graphs', name: 'Graphs' },
    { urlParam: 'thoughts', name: 'Thoughts' },
    { urlParam: 'about', name: 'About' },
];

export const Links = () => {
    const location = useLocation();
    /**
     * find url whether at current or root or not
     * @param {string} param
     * @returns
     */
    const findReg = (param: string) => {
        // eslint-disable-next-line no-useless-escape
        let reg = new RegExp(`^\/(${param})|(\/)$`, 'g');
        return location.pathname.match(reg);
    };

    return (
        <LinksWrapper>
            {firstLevelRoutes.map(
                item =>
                    findReg(item.urlParam) && (
                        <StyledLink key={item.name} to={`/${item.urlParam}`}>
                            {item.name}
                        </StyledLink>
                    ),
            )}
        </LinksWrapper>
    );
};

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;
