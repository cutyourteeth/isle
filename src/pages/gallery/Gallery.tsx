import { Gallery, ImagePreview } from 'gearware';
import 'gearware/lib/components/maintaining/gallery/index.css';
import 'gearware/lib/components/maintaining/image-preview/index.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const photoQuery = [
    'https://s1.ax1x.com/2020/04/12/GLebWT.jpg',
    'https://s1.ax1x.com/2020/04/12/GLeHYV.jpg',
    'https://s1.ax1x.com/2020/04/12/GLe7F0.jpg',
    'https://s1.ax1x.com/2020/04/12/GLeooq.jpg',
    'https://s1.ax1x.com/2020/04/12/GLeIwn.jpg',
    'https://s1.ax1x.com/2020/04/12/GLe5es.jpg',
    'https://s1.ax1x.com/2020/04/12/GLehLj.jpg',
    'https://s1.ax1x.com/2020/04/12/GLefyQ.jpg',
    'https://s1.ax1x.com/2020/04/12/GLeWQg.jpg',
    'https://s1.ax1x.com/2020/04/12/GLeRSS.jpg',
    'https://s1.ax1x.com/2020/04/12/GLecJf.jpg',
    'https://s1.ax1x.com/2020/04/12/GLe6FP.jpg',
    'https://s1.ax1x.com/2020/04/12/GLesot.jpg',
    'https://s1.ax1x.com/2020/04/12/Gqj89P.jpg',
    'https://s1.ax1x.com/2020/04/12/Gqj1ht.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjltI.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjQAA.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjK7d.jpg',
    'https://s1.ax1x.com/2020/04/12/Gqju0H.jpg',
    'https://s1.ax1x.com/2020/04/12/Gqjnne.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjeXD.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjZ6O.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjV1K.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjEp6.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjikR.jpg',
    'https://s1.ax1x.com/2020/04/12/GqjC79.jpg',
    'https://s1.ax1x.com/2020/04/12/Gqj90J.jpg',
    'https://s1.ax1x.com/2020/04/12/Gqjpm4.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXx6U.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXvlT.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXjpV.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXOf0.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXLYq.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXqkn.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXHTs.jpg',
    'https://s1.ax1x.com/2020/04/12/GqX7wj.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXTmQ.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXIOg.jpg',
    'https://s1.ax1x.com/2020/04/12/GqX56S.jpg',
    'https://s1.ax1x.com/2020/04/12/GqX4l8.jpg',
    'https://s1.ax1x.com/2020/04/12/GqXhSf.jpg',
    'https://s1.ax1x.com/2020/03/28/GFfufU.jpg',
];

const GalleryPage = () => {
    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState('');
    const onClose = () => {
        setVisible(false);
    };
    const handleClick = (item: any) => {
        setUrl(item.url);
        setVisible(true);
    };

    const limit = 13;

    const unitsGenerator = (queue: string[]) => {
        const units = new Array(limit).fill({ name: '', url: '', description: '' });
        const getOne = (queue: string[]) => {
            const randomIndex = Math.floor(Math.random() * queue.length);
            const item = queue.splice(randomIndex, 1)[0];
            return item;
        };
        const urls:string[] = [];
        for (let index = 0; index < units.length; index++) {
            const url = getOne(queue);
            urls.push(url);
        }
        const filledUnits = units.map((item, index) => {
            const mirror = {...item}
            mirror.url = urls[index];
            return mirror;
        });

        return filledUnits;
    };

    return (
        <GalleryPageWrapper>
            <Gallery units={unitsGenerator(photoQuery)} defaultGray={0} onClick={handleClick} limit={limit} />
            <ImagePreview url={url} onClose={onClose} visible={visible} operatorBar={['free-drag', 'free-rotate', 'reset']} />
        </GalleryPageWrapper>
    );
};

export const GalleryPageWrapper = styled.div`
    padding: 4rem 0 0 2rem;
    position: relative;
    z-index: 1;

    .g-gallery-wrapper {
        height: 70vh;
    }

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

export default GalleryPage;
