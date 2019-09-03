import React from 'react';
import styled from 'styled-components/macro';

const Svg = styled.svg`
  transform: ${({ angle }) => `rotate(${angle}deg)`};
  ${({ customStyle }) => customStyle};
`;

const Arrow = ({ customStyle, className, angle }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    customStyle={customStyle}
    angle={angle}
  >
    <line x1="12" y1="4" x2="12" y2="20" />
    <polyline points="18 14 12 20 6 14" />
  </Svg>
);

Arrow.defaultProps = {
  angle: 0,
};

export default Arrow;
