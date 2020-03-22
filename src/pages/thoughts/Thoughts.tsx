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
                <div className="thought-list-item" key={index}>
                    <img src={item.imageUrl} className="thought-list-image" alt="" />
                    <div className="thought-list-text">{item.text}</div>
                </div>
            ))}
        </WorkWrapper>
    );
};

export const WorkWrapper = styled.div`
    .thought-list-item {
        position: relative;
        overflow: hidden;
    }

    .thought-list-image,
    .thought-list-text {
        padding: 4rem 0 0 2rem;
        box-sizing: border-box;
        width: 32rem;

        @media screen and (max-width: 768px) {
            width: 80%;
        }
    }

    .thought-list-text {
        top: 0;
        margin: 4rem 0 0 2rem;
        opacity: 0;
        height: 100%;
        position: absolute;
        white-space: pre-wrap;
    }

    .thought-list-text:hover,
    .thought-list-image:hover ~ .thought-list-text {
        opacity: 1;
        background-color: #17171760;
    }
`;
