import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import Resolution from '../../../lib/Resolution';
import Markdown from '../../presentational/Markdown';
import exitIcon from '../../svg/ExitIcon';
import { StyledFontFamily, GreenColor } from '../../../lib/variables';

const slideDown = keyframes`
  0% {
    bottom: 0px;
  }
  80% {
    opacity: 1;
  }
  100% {
    bottom: -300px;
    opacity: 0;
  }
`;

export const CookiesContainer = styled.div`
  position: fixed;
  bottom: 0;
  padding: 20px;
  background-color: ${GreenColor};
  color: #ffffff;
  z-index: 10000000000;
  animation: ${({ slide }) => slide && slideDown} 1s ease-out 1;
  animation-fill-mode: forwards;
  ${Resolution.desktop`
    padding: 30px 40px 30px 40px;
  `};
`;

export const CookiesHeader = styled.h3`
  font-size: 17px;
  line-height: 1.65;
  letter-spacing: 0.5px;
  text-align: left;
  font-weight: 500;
`;

export const CookiesDescription = styled(Markdown)`
  font-size: 17px;
  line-height: 1.65;
  letter-spacing: 0.5px;
  text-align: left;
  display: inline-block;
  width: 100%;
  p {
    color: #ffffff;
    margin-bottom:0
  };
  a {
    color: #ffffff;
    text-decoration: underline;
  }
  ${Resolution.desktop`
    width: calc(100% - 150px);
  `};
  ${Resolution.hd`
    width: calc(100% - 300px);
  `};
`;

export const CookiesBtn = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  font-weight: 400;
  font-family: ${StyledFontFamily};
  outline: 0;
  background-color: #fff;
  font-size: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  overflow: hidden;
  &:hover, &:focus {
      color: #fff;
      background-color: #fff;
  }
  ${Resolution.tablet`
    margin-top:10px;
    position: initial;
    width: 136px;
    height: 50px;
    border-radius: 100px;
    color: ${GreenColor};
    font-size: 18px;
    &:hover, &:focus {
      color: ${GreenColor};
      background-color: rgba(255, 255, 255, 0.9);
    }
  `};

  ${Resolution.desktop`
    position: absolute;
    top: calc(50% - 25px);
    right:40px;
  `};
`;

export const ExitIcon = styled(exitIcon)`
  width: 12px;
  height: 12px;
  vertical-align: middle;
  z-index: 100;
  position: absolute;
  top: 50%;
  fill: ${GreenColor};
  left: 50%;
  transform: translate(-50%,-50%);
  ${Resolution.tablet`
    width: 10px;
    margin-left: 5px;
    vertical-align: middle;
    position: initial;
    transform: translate(0,0);
  `};
`;