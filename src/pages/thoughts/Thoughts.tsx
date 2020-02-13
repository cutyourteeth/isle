import React from 'react';
import styled from 'styled-components';

const postInfos = [
    {
        title: 'coon',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/01/15/19/04/red-panda-1982445__340.jpg',
        text: 'the coon:\n\nOne of the coons just ran out of your mind',
    },
    {
        title: 'the woods',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg',
        text: "the woods:\n\nQuite miss about it's peaceful sound",
    },
    {
        title: 'the fall',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
        text: 'the fall:\n\nEverything falls in the end, right?',
    },
];

export const Thoughts = () => {
    return (
        <WorkWrapper>
            {postInfos.map((item, index) => (
                <div className="work-list-item" key={index}>
                    <img src={item.imageUrl} className="work-list-image" alt="" />
                    <div className="work-list-text">{item.text}</div>
                </div>
            ))}
        </WorkWrapper>
    );
};

export const WorkWrapper = styled.div`
    .work-list-item {
        position: relative;
        overflow: hidden;
    }

    .work-list-image,
    .work-list-text {
        padding: 4rem 0 0 2rem;
        box-sizing: border-box;
        width: 32rem;

        @media screen and (max-width: 768px) {
            width: 80%;
        }
    }

    .work-list-text {
        top: 0;
        margin: 4rem 0 0 2rem;
        opacity: 0;
        height: 100%;
        position: absolute;
        white-space: pre-wrap;
    }

    .work-list-text:hover,
    .work-list-image:hover ~ .work-list-text {
        opacity: 1;
        background-color: rgba(17, 17, 17, 0.6);
    }
`;
