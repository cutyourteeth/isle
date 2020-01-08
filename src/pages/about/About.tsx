import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <div className="about">
      I am
      <a href="https://cutyourteeth.github.io/dist">here</a>
      <div className="contact-list">
        <div className="contact-tel"></div>
        <div className="contact-mail"></div>
        <div className="contact-address"></div>
      </div>
    </div>
  );
};

export const AboutWrapper = styled.div`
  font-size: 1.5rem;
  color: rgb(78, 78, 78, 0.6);
  padding: 2rem;

  &:hover {
    color: rgb(178, 178, 178, 0.6);

    & > a {
      color: white;
    }
  }
`;
