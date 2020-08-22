import styled from "styled-components";

export const Header = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  position: relative;

  > div.curved {
    z-index: -1;
    position: absolute;
    width: 100vw;
    background: linear-gradient(45deg, #917ae2, #d97ae2);
    height: 60vh;
    top: 0;

    @media (max-width: 1024px) {
      height: 55vh;
    }

    @media (max-width: 768px) {
      height: 50vh;
    }

    @media (max-width: 425px) {
      height: 42vh;
    }

    > svg {
      width: 100vw;
      position: absolute;
      bottom: 0;

      > path {
        fill: rgba(243, 244, 245, 1);
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  margin: 20px 0;
  color: #fff;
  position: absolute;
  top: 10%;
`;

export const Input = styled.input`
  padding: 20px;
  width: 100%;
  border: 0;
  text-align: center;
  font-size: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  margin-top: 100px;
`;

export const Button = styled.button`
  padding: 15px 10%;
  font-size: 16px;
  font-weight: bold;
  border: 0;
  margin: 50px 0;
  background: linear-gradient(45deg, #917ae2, #d97ae2);
  background-size: 150%;

  cursor: pointer;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.5);
  transition: opacity 0.2s;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;

export const ResultContainer = styled.div`
  width: 50%;
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.5);
  /* cursor: pointer;
  transition: opacity 0.2s; j*/

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 10px;
    font-size: 15px;
  }

  /* &:hover {
    opacity: 0.7;
  } j*/
`;
