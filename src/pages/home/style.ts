import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  color: white;
  min-height: 120vh;

  .title {
    padding: 6rem 2rem 4rem;

    & > h1 {
      font-size: 50px;
      font-weight: 600;
      line-height: 1.25;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }

    & > p {
      padding-top: 0.5rem;
      font-size: 15px;
      line-height: 15px;
      margin-top: 10px;
    }
  }
  .main-view {
    min-height: calc(100vh - 400px);
  }
  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: 4rem;
    line-height: 4rem;
    padding: 0 2rem;
    text-transform: uppercase;
    box-sizing: border-box;
    color: rgb(102, 102, 102);

    .header-left {
      letter-spacing: 0.2rem;

      &:hover {
        color: white;
      }
    }

    .header-right {
      display: flex;
      flex-flow: row;
      position: relative;
      justify-content: center;
    }
  }
`;
