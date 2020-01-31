import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    padding: 0.5rem 0;
    font-size: 45px;
    color: gray;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        color: #2dc6ad;
        filter: hue-rotate();
        animation: hue-trans 7s infinite;
    }
`;

export default StyledLink;
