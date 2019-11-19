import styled from "styled-components";


export const WorkWrapper = styled.div`
.work-list-item {
  position: relative;
  overflow: hidden;
}

.work-list-image, .work-list-text {
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

.work-list-text:hover, .work-list-image:hover~.work-list-text {
  opacity: 1;
  background-color: rgba(17, 17, 17, 0.6);
}`

export const AboutWrapper = styled.div`
  font-size: 1.5rem;
  color: rgb(78, 78, 78, 0.6);
  padding: 2rem;

  &:hover {
    color: rgb(178, 178, 178, 0.6);

    &>a {
      color: white;
    }
  }
`