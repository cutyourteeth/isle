import * as H from 'history';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

export const StyledLink = (props: H.LocationState) => {
    const [active, setActive] = useState(false);
        const history = useHistory()
        const changeState = () => {
        history.push(props.to)
        setActive(s => !!s);
    };

    return (
        <LinkWrapper onClick={changeState} className={active ? 'active' : 'inactive'}>
            {props.children}
        </LinkWrapper>
    );
    // return <LinkWrapper {...props} className={active?'active':'inactive'}></LinkWrapper>;
};

const LinkWrapper = styled.div`
    padding: 0.5rem 0;
    font-size: 45px;
    color: gray;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    & .active {
        color: #2dc6ad;
        filter: hue-rotate();
        animation: hue-trans 7s infinite;
    }
    &:hover {
        color: #2dc6ad;
        filter: hue-rotate();
        animation: hue-trans 7s infinite;
    }
`;

// const LinkWrapper = styled(Link)`
//     padding: 0.5rem 0;
//     font-size: 45px;
//     color: gray;
//     font-weight: bold;
//     text-decoration: none;
//     &:hover {
//         color: #2dc6ad;
//         filter: hue-rotate();
//         animation: hue-trans 7s infinite;
//     }
// `;

export default StyledLink;
