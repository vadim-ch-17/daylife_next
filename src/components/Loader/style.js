import styled, { keyframes } from "styled-components";

const FirstDot = keyframes`
0% {
    transform: scale(1) translateX(0);
  }
  25% {
    transform: scale(2.5) translateX(0);
  }
  50% {
    transform: scale(1) translateX(0);
  }
  83% {
    transform: scale(1) translateX(240px);
  }
  100% {
    transform: scale(1) translateX(0);
  }
`

const SecondDot = keyframes`
0% {
    transform: translateX(0px);
  }
  27% {
    transform: translateX(-40px);
  }
  50% {
    transform: translateX(0px);
  }
  81% {
    transform: translateX(180px);
  }
  100% {
    transform: translateX(0);
  }
`

const ThirdDot = keyframes`
0% {
    transform: translateX(0px);
  }
  29% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateX(0px);
  }
  79% {
    transform: translateX(120px);
  }
  100% {
    transform: translateX(0);
  }
`

const FourthDot = keyframes`
0% {
    transform: translateX(0px);
  }
  31% {
    transform: translateX(-160px);
  }
  50% {
    transform: translateX(0px);
  }
  77% {
    transform: translateX(60px);
  }
  100% {
    transform: translateX(0);
  }
`

const FifthDot = keyframes`
0% {
    transform: scale(1) translateX(0);
  }
  33% {
    transform: scale(1) translateX(-220px);
  }
  50% {
    transform: scale(1) translateX(0);
  }
  75% {
    transform: scale(2.5) translateX(0);
  }
  100% {
    transform: scale(1) translateX(0);
  }
`
export const DotAnimate = styled.div`
    .dot {
        &:first-child {
            animation: ${FirstDot} 3s linear infinite;
        }
        &:nth-child(2) {
            animation: ${SecondDot} 3s linear infinite;
        }
        &:nth-child(3) {
            animation: ${ThirdDot} 3s linear infinite;
        }
        &:nth-child(4) {
            animation: ${FourthDot} 3s linear infinite;
        }
        &:nth-child(5) {
            animation: ${FifthDot} 3s linear infinite;
        }
    }
`
export const DotsStyles = styled.div`
filter: url(#gooeyness);
`;

