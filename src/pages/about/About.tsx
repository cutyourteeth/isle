import React from 'react';
import styled from 'styled-components';

export const About = () => {
    return (
        <AboutWrapper>
            <div className="content">-- Details not available --</div>

            <div className="contact-list">
                <div className="contact-title">You may contact me with</div>
                <br />

                <a href="https://github.com/caperso" className="contact-github ">
                    <span className="iconfont icon-github"></span> https://github.com/caperso
                </a>
                <a href="mail:qq17402@sina.com" className="contact-mail ">
                    <span className="iconfont icon-mail"></span> qq174028@sina.com
                </a>
                <a href="tencent://message/?uin=273964183" className="contact-chat">
                    <span className="iconfont icon-chat"></span> 273964183
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
        color: rgb(178, 178, 178, 0.6);
        a > span {
            line-height: 3em;
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
