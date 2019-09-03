import styled from 'styled-components/macro';
import { css } from 'styled-components';
import Resolution from '../../../lib/Resolution';
import { P } from '../../presentational/Generic';
import { StyledFontFamily, LightOrangeColor, OrangeColor, DefaultItemWidth } from '../../../lib/variables';

export const Container = styled.div`
  position: relative;
  max-width: 900px;

  ${({ stickyPadding }) => (stickyPadding ? css`
    margin-right: -20px;
    margin-left: -20px;

    ${Resolution.tablet`
      margin-right: auto;
      margin-left: auto;
    `}
  ` : css`
    margin-right: auto;
    margin-left: auto;
  `)}
`;

export const Content = styled.div`
  font-size: 16px;
  position: relative;
`;

export const Feed = styled.div`
  display: flex;
  -webkit-overflow-scrolling: touch;

  ${({ horizontalScroll }) =>
  (horizontalScroll
    ? `
      overflow-x: scroll;
      overflow-y: hidden;
      flex-wrap: no-wrap;
    ` : `
      flex-wrap: wrap;
      justify-content: space-evenly;
    `)}

  ${Resolution.tablet`
    flex-flow: wrap row;
    justify-content: space-evenly;
    align-items: baseline;
    overflow-x: unset;
    overflow-y: unset;
    height: unset;
  `}

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ customRowStyle }) => customRowStyle}
`;

export const FloatBackground = styled.div`
  position: relative;
  z-index: 1;
`;

export const FloatBackgroundColor = styled.div`
  position: absolute;
  top: ${props => (props.count > 4 ? '-100' : '-56')}px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: auto;
  height: ${props => (props.count > 4 ? '80' : '75')}%;
  background-color: ${LightOrangeColor};
  ${Resolution.tablet`
    width: 93%;
  `};
  ${({ customBackgroundStyle }) => customBackgroundStyle};
`;

export const FloatContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  position: relative;
  top: -5px;
  ${Resolution.tablet`
    top: -15px;
  `}
`;

export const Title = styled.label`
  text-align: left;
  font-family: ${StyledFontFamily};
  font-size: 30px;
  line-height: 1.12;
  letter-spacing: 0.5px;
  color: ${OrangeColor};
  white-space: pre-wrap;
  position: relative;
  z-index: 15;
  margin: 0;
  margin-bottom: ${({ hasSubtitle }) => hasSubtitle ? '0' : '15px'};
  width: ${DefaultItemWidth};
  left: 10px;
  ${Resolution.phone`
    width: 540px;
  `};
  ${Resolution.tablet`
    font-size: 45px;
    width: 100%;
  `}
  ${Resolution.hd`
    left: 6px;
  `};
`;

export const Subtitle = styled(P)`
  position: relative;
  white-space: pre-wrap;
  color: ${OrangeColor};
  font-size: 18px;
  margin: 10px 0px 10px 10px;
`;