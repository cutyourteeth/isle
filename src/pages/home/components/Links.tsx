import { Levels } from 'gearware';
import 'gearware/lib/components/levels/index.css';
import { Level } from 'gearware/lib/components/levels/Levels';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Divide } from './Divide';

interface LinkInfo {
    name: string;
    urlParam?: string;
    staticUrl?: string;
    description?: string;
}
// const productionLinks: LinkInfo[] = [
//     { staticUrl: 'https://gears.caperal.cn', name: 'Gearware', description: 'React UI library' },
//     { staticUrl: '', name: 'Kaleidoscope', description: '一键生成Creo关系程序' },
// ];
// const personalLinks: LinkInfo[] = [
//     { urlParam: 'home/graphs', name: 'Charts', description: 'From my data collector' },
//     { staticUrl: 'https://caperso.github.io/handnote/', name: 'Notes', description: 'My FE handnote' },
//     { urlParam: 'home/graphs', name: 'About', description: 'Contact and more' },
// ];

export const Links = () => {
    const history = useHistory();

    const handleRouteChange = (route: string) => {
        const longRoute = 'home/'.concat(route);
        // history.replace(longRoute);
        console.log(longRoute);
    };

    const changeRoute = (route: string, activeState:boolean) => {
        if(!activeState){
            const longRoute = 'home/'.concat(route);
            history.push(longRoute);
        }
    };

    const firstLinks: Level[] = [
        {
            name: 'Gearware',
            staticUrl: 'https://gears.caperal.cn',
            description: 'React UI library',
        },
        { name: 'Kaleidoscope', description: '一键生成Creo关系程序' },
    ];

    const secondLinks: Level[] = [
        {
            name: 'Charts',
            route: 'graphs',
            description: 'From my data collector',
            deep: [
                { name: 'Real Estate', route: 'estate', description: 'House Stock' ,action:changeRoute},
                { name: 'Price', route: 'price', description: 'item price' },
            ],
        },
        { staticUrl: 'https://caperso.github.io/handnote/', name: 'Notes', description: 'My FE handnote' },
        { route: 'about', name: 'About', description: 'Contact and more' },
    ];

    /**
     * find url whether at current or root or not
     * @param {string} param
     * @returns
     */
    // const linkGenerator = (item: LinkInfo) => (
    //     <StyledLink
    //         key={item.name}
    //         static={!!item['staticUrl']}
    //         description={item.description ? item.description : ''}
    //         to={item['staticUrl'] ? item.staticUrl : `/${item.urlParam}`}
    //     >
    //         {item.name}
    //     </StyledLink>
    // );

    return (
        <LinksWrapper>
            <Levels data={firstLinks} />
            <Divide />
            <Levels data={secondLinks} defaultExpanded={false} />

            {/* {productionLinks.map(item => linkGenerator(item))}
            <Divide />
            {personalLinks.map(item => linkGenerator(item))}
            <Divide /> */}
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
