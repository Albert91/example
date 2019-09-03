import styled from 'styled-components/macro';
import { StyledFontFamily, BlackColor, DefaultItemWidth } from '../../../lib/variables';

export const Card = styled.div`
  min-width: ${DefaultItemWidth};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  letter-spacing: 0.5px;
  align-self: start;
`;

export const CardContent = styled.div`
  width: ${DefaultItemWidth};
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: ${DefaultItemWidth};
  height: ${DefaultItemWidth};
  overflow: hidden;
  cursor: pointer;
`;


export const SimpleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: white;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  font-family: ${StyledFontFamily};
  font-weight: 500;
  font-size: 20px;
  color: ${BlackColor};
  line-height: 1;
  padding: 8px 0;
  cursor: pointer;
`;

export const Summary = styled.div`
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: ${DefaultItemWidth};
  height: 38px;
  text-align: left;
  line-height: 1.2;
  color: #000;
`;
