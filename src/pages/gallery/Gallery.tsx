import { ImagePreview } from 'gearware';
import 'gearware/lib/components/image-preview/index.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const postInfos = [
    {
        title: 'coon',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/01/15/19/04/red-panda-1982445__340.jpg',
        text: 'the coon:\n\n Click to view (点击查看)',
        alt: 'the coon',
    },
    {
        title: 'the woods',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg',
        text: 'the woods:\n\n Click to view (点击查看)',
        alt: 'the woods',
    },
    {
        title: 'the fall',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
        text: 'the fall:\n\n Click to view (点击查看)',
        alt: 'the fall',
    },
];

const Gallery = () => {
    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState('');
    const onClose = () => {
        setVisible(false);
    };
    const handleClick = (url: string) => {
        setUrl(url);
        setVisible(true);
    };

    return (
        <GalleryWrapper>
            {postInfos.map((item, index) => (
                <div className="gallery-list-item" key={index} data-hover={item.text} onClick={() => handleClick(item.imageUrl)}>
                    <img alt={item.alt} src={item.imageUrl} className="gallery-list-image" />
                </div>
            ))}
            <ImagePreview url={url} onClose={onClose} visible={visible} operatorBar={['free-drag', 'free-rotate', 'reset']} />
        </GalleryWrapper>
    );
};

export const GalleryWrapper = styled.div`
    padding: 4rem 0 0 2rem;
    position: relative;
    z-index: 1;

    .gallery-list-item {
        margin: 2rem 0;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;

        &:hover::after {
            content: attr(data-hover);
            color: white;
            position: absolute;
            box-sizing: border-box;
            padding: 6rem 0 0 2rem;
            cursor: pointer;
            background-color: #17171730;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            animation: fade-in 0.45s forwards;
        }
    }
    .gallery-list-image {
        width: 32rem;
        cursor: pointer;
        box-sizing: border-box;
    }
`;

export default Gallery;
