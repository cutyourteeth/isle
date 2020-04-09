import React from 'react';
import styled from 'styled-components';

 const SiteRecord = () => {
    return (
        <SiteInfo>
            <div className="site-text">
                <Anchor href="http://www.beian.miit.gov.cn/" aria-label="link and check for this site">
                    <span role="img" aria-label="emoji">
                        IPC证: 浙ICP备19047176号
                    </span>
                </Anchor>
                <div>
                    <span role="img" aria-label="emoji">
                        ✨Build with React, gearware
                        <br />
                        ✨Serve by Nodejs and Nginx.
                        <br />
                        ✨Automatic deploy with travis-ci.
                    </span>
                </div>
            </div>
        </SiteInfo>
    );
};

const SiteInfo = styled.div`
    font-weight: 400;
    display: flex;
    flex-flow: column;
    padding-top: 2rem;
    font-size: 12px;
    color: white;
    position: relative;
    &:hover > .site-text {
        background-color: rgba(0, 0, 0, 0.9);
    }
    .site-text {
        margin: 1em;
        padding: 1.5em;
        border-radius: 5px;
        box-sizing: border-box;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-end;

        & > div {
            text-align: right;
            & > span {
                &:hover {
                    color: goldenrod;
                }
            }
        }
    }
`;

const Anchor = styled.a`
    color: white;
    &:hover {
        color: goldenrod;
    }
`;

export default SiteRecord