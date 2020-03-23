import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

interface Props {
    to: string;
    children: React.ReactNode;
    description?:string;
    static?: boolean; // if static means a total new url is pushed in
}

export const StyledLink = (props: Props) => {
    const [active, setActive] = useState(false);
    const history = useHistory();
    const changeRoute = () => {
        if (active) {
            //TODO: change to sallower level url
            history.push('/');
        } else {
            history.push(props.to);
        }
        setActive(s => !s);
    };

    const replaceRoute = () => {
        window.location.replace(props.to);
    };

    return (
        <LinkWrapper onClick={props.static ? replaceRoute : changeRoute} theme={{ active }} data-hover={props.description}>
            {props.children}
        </LinkWrapper>
    );
};

const LinkWrapper = styled.div`
    padding: 0.5rem 0;
    font-size: 45px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    color:#444;
    ${props => (props.theme.active ? `color: white;` : ``)}

    &:hover {
        color: white;
    }

    &:hover::after {
        content: attr(data-hover);
        color: #ccc;
        font-weight: 300;
        font-size: 26px;
        opacity: 0;
        padding-left:0.5em;
        animation: fade-in 0.45s forwards;
    }
`;

export default StyledLink;
