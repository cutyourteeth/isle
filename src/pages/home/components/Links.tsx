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
const productionLinks: LinkInfo[] = [
    { staticUrl: 'https://gears.caperal.cn', name: 'Gearware', description: 'React UI library' },
    { staticUrl: '', name: 'Kaleidoscope', description: '一键生成Creo关系程序' },
];
const personalLinks: LinkInfo[] = [
    { urlParam: 'home/graphs', name: 'Charts', description: 'From my data collector' },
    { staticUrl: 'https://caperso.github.io/handnote/', name: 'Notes', description: 'My FE handnote' },
    { urlParam: 'home/graphs', name: 'About', description: 'Contact and more' },
];

export const Links = () => {
    /**
     * find url whether at current or root or not
     * @param {string} param
     * @returns
     */
    // const findReg = (param: string) => {
    //     eslint-disable-next-line no-useless-escape
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
            {productionLinks.map(item => linkGenerator(item))}
            <Divide />
            {personalLinks.map(item => linkGenerator(item))}
            <Divide />
        </LinksWrapper>
    );
};

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 655px;
    padding: 0 2rem;
    position: relative;
`;
