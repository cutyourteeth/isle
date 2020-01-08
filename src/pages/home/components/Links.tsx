import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Links = () => {
  return (
    <LinksWrapper>
      <Link to="/graphs" className="link">
        Graphs
      </Link>
      <Link to="/thoughts" className="link">
        Thoughts
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
    </LinksWrapper>
  );
};

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  .link {
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
  }
`;
