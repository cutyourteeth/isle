import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
    to: string;
}

export const StyledLink = (props: Props) => {
    const [active, setActive] = useState(false);
    const history = useHistory();
    const changeState = () => {
        if (active) {
            //TODO: change to sallower level url
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
    ${props => (props.theme.active ? `color: #2dc6ad;filter: hue-rotate();animation: hue-trans 300s infinite;` : ``)}

    &:hover {
        color: white;
        filter: hue-rotate();
        animation: hue-trans 7s infinite;
    }
`;

export default StyledLink;
