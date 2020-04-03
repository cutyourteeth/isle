import { Levels } from 'gearware';
import 'gearware/lib/components/levels/index.css';
import { Level } from 'gearware/lib/components/levels/Levels';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Divide } from './Divide';

const primaryLinks: Level[] = [
    {
        name: 'Gearware',
        route: 'gears',
        staticUrl: 'https://gears.caperal.cn',
        description: 'React UI library',
    },
    { name: 'Kaleidoscope', route: 'kai', description: '一键生成Creo关系程序' },
];

const secondaryLinks: Level[] = [
    {
        name: 'Charts',
        route: 'graphs',
        description: 'From my data collector',
        deep: [
            { name: 'Real Estate', route: 'estate', description: 'House Stock' },
            { name: 'Price', route: 'price', description: 'Some Item Price' },
        ],
    },
    {
        name: 'Notes',
        description: 'My notes',
        deep: [
            {
                name: 'FE Technics',
                staticUrl: 'https://caperso.github.io/handnote/',
                description: 'My FE handnote',
            },
            {
                name: 'Node & Service',
                description: 'Preparing',
            },
            {
                name: 'C++ & Algorithm',
                description: 'Preparing',
            },
        ],
    },
    { route: 'about', name: 'About', description: 'Contact and more' },
];

export const Links = () => {
    const history = useHistory();

    const handleRouteChange = (route: string) => {
        const longRoute = '/home/'.concat(route);
        history.replace(longRoute);
        console.log(longRoute);
    };

    const activeStyle: React.CSSProperties = {
        color: 'white',
        animation: 'none',
    };

    return (
        <LinksWrapper>
            <Levels data={primaryLinks} />
            <Divide />
            <Levels data={secondaryLinks} singleActiveStyle={activeStyle} defaultExpanded={false} onChangeRoute={handleRouteChange} />
        </LinksWrapper>
    );
};

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 655px;
    position: relative;

    /* css hack */
    .g-levels-wrapper {
        div {
            .g-levels-one {
                padding: 0.5rem 0;
                color: #444;
                animation: none;

                &:hover {
                    color: white;
                }

                &:hover::after {
                    color: #eee;
                    font-weight: 300;
                    font-size: 26px;
                }
            }
        }
    }
`;
