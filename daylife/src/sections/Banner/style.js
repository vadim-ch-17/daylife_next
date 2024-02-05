import styled from "styled-components";
import theme from "@/styles/theme";

export const FigureStyles = styled.div`
  display: block;
  padding-top: 93%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 992px) {
    padding-top: 70%;
  }

  @media screen and (max-width: 766px) {
    padding-top: 93%;
  }
`;

export const CircleStyles = styled.div`
  overflow: hidden;
  background-color: ${theme.colors.secondary};
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  height: 1000px;
  width: 1000px;
  top: 0;
  left: 50%;
  transform: translate(-47%, -50%);

  @media screen and (max-width: 992px) {
    top: 15%;
    height: 100ch;
    width: 140vw;
  }

  @media screen and (max-width: 766px) {
    transform: translate(-53%, -70%);
    height: 1000px;
    width: 1000px;
  }
`;

export const BannerStyles = styled.div`
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 992px) {
    &:after {
      content: "";
      position: absolute;
      background-color: ${theme.colors.secondary};
      height: 50%;
      width: 100%;
      top: 0;
      z-index: -2;
    }
  }

`;
