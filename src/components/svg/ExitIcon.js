import React from 'react';
import styled from 'styled-components/macro';

const Svg = styled.svg`
  ${({ customStyle }) => customStyle};
`;

export default ({ customStyle, className, width }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "100%"}
    height={width || "100%"}
    viewBox="0 0 16 17"
    fill="#1D1D1D"
    customStyle={customStyle}
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M15.72 14.44L10.08 8.8l5.64-5.639a.58.58 0 0 0 0-.84l-1.7-1.7-6.06 6.06L1.88.6.18 2.3a.58.58 0 0 0 0 .84l5.64 5.64L.2 14.44a.58.58 0 0 0 0 .84l1.7 1.7 6.06-6.06L14.04 17l1.7-1.7c.22-.24.22-.62-.02-.86z"
    />
  </Svg>
);
