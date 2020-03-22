import React from 'react';
import styled from 'styled-components';
import StyledLink from '../../../components/core/StyledLink';
import { Divide } from './Divide';

interface LinkInfo {
    name: string;
    urlParam?: string;
    staticUrl?: string;
    description?: string;
}
const technicLinks: LinkInfo[] = [{ staticUrl: 'http://gears.caperal.cn', name: 'Gearware', description: 'React UI library' }];
const personalLinks: LinkInfo[] = [
    { urlParam: 'graphs', name: 'Charts', description: 'From my data collector' },
    { urlParam: 'thoughts', name: 'Thoughts', description: 'Hi secret garden' },
    { urlParam: 'about', name: 'About', description: 'Contact and more' },
];

export const Links = () => {
    // const location = useLocation();
    /**
     * find url whether at current or root or not
     * @param {string} param
     * @returns
     */
    // const findReg = (param: string) => {
    //     // eslint-disable-next-line no-useless-escape
    //     let reg = new RegExp(`^\/(${param})|(\/)$`, 'g');
    //     return location.pathname.match(reg);
    // };

    const linkGenerator = (item: LinkInfo) => (
        <StyledLink
            key={item.name}
            static={!!item['staticUrl']}
            description={item.description ? item.description : ''}
            to={item['staticUrl'] ? item.staticUrl : `/${item.urlParam}`}
        >
            {item.name}
        </StyledLink>
    );

    return (
        <LinksWrapper>
            {technicLinks.map(item => linkGenerator(item))}
            <Divide />
            {personalLinks.map(item => linkGenerator(item))}
            <Divide />
        </LinksWrapper>
    );
};

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    position: relative;
`;
