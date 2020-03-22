import React from 'react';
import styled from 'styled-components';

export const SiteRecord = () => {
    return (
        <SiteInfo>
            <p>
                <span role="img" aria-label="emoji">
                    ✨ Built with React & supported by Node on Nginx. &nbsp; ✨
                </span>
                <span role="img" aria-label="emoji"></span>
            </p>
            <br />
            <p>
                <span role="img" aria-label="emoji">
                    ❤️ Written by Caper with passion and&nbsp; ❤️
                </span>
            </p>
            <br />
            <Anchor href="http://www.beian.miit.gov.cn/" aria-label="link and check for this site">
                IPC证: 浙ICP备19047176号
            </Anchor>
            <br />
        </SiteInfo>
    );
};

const SiteInfo = styled.div`

    font-weight: 400;
    display: flex;
    flex-flow: column;
    padding: 2rem;
    font-size: 10px;
    color: white;
    & > p:hover {
        color: goldenrod;
    }
`;

const Anchor = styled.a`
    color: white;
    font-size: 10px;
    &:hover {
        color: goldenrod;
    }
`;
