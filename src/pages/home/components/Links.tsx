import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import StyledLink from '../../../components/core/StyledLink';
import { Divide } from './Divide';

interface LinkInfo {
    name: string;
    urlParam?: string;
    staticUrl?: string;
}
const technicLinks: LinkInfo[] = [
    { urlParam: 'graphs', name: 'Graphs' },
    { staticUrl: 'http://gears.caperal.cn', name: 'React-Gears' },
];
const personalLinks: LinkInfo[] = [
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

    const linkGenerator = (item: LinkInfo) =>
        item['staticUrl'] ? (
            <StyledLink key={item.name} static={true} to={item.staticUrl}>
                {item.name}
            </StyledLink>
        ) : item['urlParam'] ? (
            findReg(item.urlParam) && (
                <StyledLink key={item.name} to={`/${item.urlParam}`}>
                    {item.name}
                </StyledLink>
            )
        ) : null;

    return (
        <LinksWrapper>
            {technicLinks.map(item => linkGenerator(item))}
            <Divide />
            {personalLinks.map(item => linkGenerator(item))}
        </LinksWrapper>
    );
};

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
`;
