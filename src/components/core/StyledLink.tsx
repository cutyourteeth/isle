import * as H from 'history';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

export const StyledLink = (props: H.LocationState) => {
    const [active, setActive] = useState(false);
    const history = useHistory();
    const changeState = () => {
        if (active) {
            // change to root url
            history.push('/');
        } else {
            history.push(props.to);
        }
        setActive(s => !s);
    };

    return (
        <LinkWrapper onClick={changeState} theme={{ active }}>
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
    color: grey;
    ${props => (props.theme.active ? `color: #2dc6ad;filter: hue-rotate();animation: hue-trans 7s infinite;` : ``)}

    &:hover {
        color: #2dc6ad;
        filter: hue-rotate();
        animation: hue-trans 7s infinite;
    }
`;

export default StyledLink;
