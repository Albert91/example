import React from 'react';
import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

const Bounce = keyframes`
  0%, 80%, 100% { transform: scale(0) }
  40% { transform: scale(0.8) }
`;

const SpinnerWrapper = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
  > div {
    width: 15px;
    height: 15px;
    background-color: #15e59e;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${Bounce} 1.4s infinite ease-in-out both;
    animation: ${Bounce} 1.4s infinite ease-in-out both;
  }
  div:nth-child(1) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  div:nth-child(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`;

export default () => (
  <SpinnerWrapper>
    <div />
    <div />
    <div />
  </SpinnerWrapper>
);
