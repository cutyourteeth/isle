import React from 'react';
import styled from 'styled-components';

export const About = () => {
    return (
        <AboutWrapper>
            <div className="content">--Details not available now--</div>
            <div className="contact-list">
                <div className="contact-title">You may contact me with</div>
                <br />
                <a href="tencent://message/?uin=273964183" className="contact-chat">
                    <span className="iconfont icon-chat"></span> 273964183
                </a>
                <a href="https://github.com/dimlights" className="contact-github ">
                    <span className="iconfont icon-github"></span> https://github.com/dimlights
                </a>
                <a href="mail:qq17402@sina.com" className="contact-mail ">
                    <span className="iconfont icon-mail"></span> qq17402@sina.com
                </a>
            </div>
        </AboutWrapper>
    );
};

export const AboutWrapper = styled.div`
    font-size: 1.5rem;
    color: rgb(78, 78, 78, 0.6);
    padding: 2rem;
    .content:hover {
        color: rgb(178, 178, 178, 0.6);
    }
    .contact-list {
        padding: 2rem 0;
        display: flex;
        flex-flow: column;
        &:hover {
            color: rgb(178, 178, 178, 0.6);
        }
        a > span {
            font-weight: 700;
            padding: 0 0.25em 0 0;
        }
        a:hover {
            color: white;
        }
        [class*='contact-'] {
            padding: 0.5rem 0;
        }
    }
`;
