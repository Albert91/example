import styled from 'styled-components';
import { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Resolution from '../../../lib/Resolution';

const mediaMargin = 32;
export const StyledMarkdown = styled(ReactMarkdown)`
  ${props => props.theme === 'white' &&
  css`
      p {
        color: white;
      }
    `
  }
  overflow: hidden;
  > div {
    display: flex;
    justify-content: center;
  }

  ${Resolution.tablet`
    img[alt$=">"] {
      float: right;
      width: 42%;
      margin-left: ${mediaMargin/2}px;
      margin-bottom: ${mediaMargin/2}px;
      ${Resolution.tablet`
        margin-left: ${mediaMargin}px;
        margin-bottom: ${mediaMargin}px;
      `}
    }

    img[alt$="<"] {
      float: left;
      width: 42%;
      margin-right: ${mediaMargin/2}px;
      margin-bottom: ${mediaMargin/2}px;
      ${Resolution.tablet`
        margin-right: ${mediaMargin}px;
        margin-bottom: ${mediaMargin}px;
      `}
    }

    img[alt$="<>"] {
      display: block;
      width: 75%;
      max-width: 100%;
      height: auto;
      margin: ${mediaMargin/2}px auto;
      float: none !important;
      ${Resolution.tablet`
        margin: ${mediaMargin}px auto;
      `}
    }
  `}

  ${({ customStyle }) => customStyle};
`;