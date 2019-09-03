import React from 'react';
import styled from 'styled-components/macro';
import Resolution from '../../lib/Resolution';
import {
  StyledFontFamily,
  OrangeColor,
  SmallSpacing,
  TinySpacing,
  ListSpacing,
} from '../../lib/variables';

// standard heading styles
const HeadingStyle = `
  font-family: ${StyledFontFamily};
  line-height: 1.21;
  letter-spacing: 0.3px;
  color: #1d1d1d;
  font-weight: normal;
  text-align: left;
`;

// headers
export const H1 = styled.h1`
  ${HeadingStyle}
  font-size: 34px;
  font-weight: 500;
  white-space: pre-wrap;

  ${Resolution.tablet`
    font-size: 50px;
    line-height: 1.12;
    letter-spacing: 0.4px;
    padding: 0;
  `};
  ${({ customStyle }) => customStyle};
`;

export const H2 = styled.h2`
  ${HeadingStyle}
  font-size: 26px;
  margin: ${SmallSpacing} 0;

  ${Resolution.tablet`
    font-size: 36px;
    line-height: 1.12;
    letter-spacing: 0.4px;
    padding: 0;
  `};
  ${({ customStyle }) => customStyle};

  color: ${({ orange }) => (orange ? OrangeColor : 'initial')};
`;

export const H3 = styled.h3`
  ${HeadingStyle}
  font-size: 22px;
  margin: ${SmallSpacing} 0 ${TinySpacing} 0;

  ${Resolution.tablet`
    font-size: 30px;
    line-height: 1.12;
    letter-spacing: 0.4px;
    padding: 0;
  `};
  ${({ customStyle }) => customStyle};
`;

export const H4 = styled.h4`
  ${HeadingStyle}
  font-size: 18px;
  margin: ${SmallSpacing} 0 ${TinySpacing} 0;

  ${Resolution.tablet`
    font-size: 26px;
    line-height: 1.12;
    letter-spacing: 0.4px;
    padding: 0;
  `};
  ${({ customStyle }) => customStyle};
`;

export const H5 = styled.h5`
  ${HeadingStyle}
  font-size: 16px;
  margin: ${SmallSpacing} 0 ${TinySpacing} 0;

  ${Resolution.tablet`
    font-size: 20px;
    line-height: 1.12;
    letter-spacing: 0.4px;
    padding: 0;
  `};
`;

export const P = styled.p`
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.5px;
  color: black;
  white-space: pre-wrap;
  margin: 0 0 ${SmallSpacing} 0;
  ${Resolution.tablet`
    font-size: 18px;
    letter-spacing: 0.4px;
  `};
  ${({ customStyle }) => customStyle};
`;

export const OL = styled.ol`
  margin-bottom: ${ListSpacing};
`;

export const UL = styled.ul`
  margin-bottom: ${ListSpacing};
`;

export const LI = styled.li`
  font-size: 18px;
  line-height: 1.8em;
  list-style-type: disc;
  margin-left: ${ListSpacing};
`;

const CustomSpacer = styled.div`
  height: ${({ mobileHeight }) => `${mobileHeight}px`};
  color: transparent;
  width: 100%;
  ${Resolution.tablet`
    height: ${({ desktopHeight }) => `${desktopHeight}px`};
  `};
`;

const desktopSpace = 130;
const mobileSpace = desktopSpace / 1.3;
const getSpacerRatio = (small, tiny) => {
  if (small) {
    return 1 / 2;
  } else if (tiny) {
    return 1 / 3;
  }
  return 1;
};

export const Spacer = ({ small, tiny, innerRef }) => (
  <CustomSpacer
    ref={innerRef}
    mobileHeight={mobileSpace * getSpacerRatio(small, tiny)}
    desktopHeight={desktopSpace * getSpacerRatio(small, tiny)}
  />
);

export const ComponentContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;
