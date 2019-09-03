import React from 'react';
import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { H1, Spacer } from './Generic';
import Resolution from '../../lib/Resolution';

const StyledH1 = styled(H1)`
  margin-top: 0;
  margin-bottom: 0;
  ${props => props.overlapHeader && css`
    position: absolute;
    margin-left: -10px;
    margin-top: -24px;
    
    ${Resolution.tablet`
      margin-left: -20px;
      margin-top: -34px;
    `};
  `}
`;

const PageWrapper = styled.div`
  ${({ article }) => article ? 'max-width: 780px' : 'max-width: 900px'};
  margin: 0 auto;
  position: relative;
  padding: 0 20px;
  ${Resolution.desktop`
    padding: 0;
  `}
`;

const ContentWrapper = styled.div`
  ${({ hasMainImage }) => hasMainImage && `
    p:first-of-type img {
      object-fit: cover;
      object-position: center;
      height: 400px;
      width: 100%;
    }
  `}
`;

export default ({ title, hasMainImage, article, children }) => (
  <PageWrapper article={article}>
    <Spacer />
    {title && <StyledH1>{title}</StyledH1>}
    <ContentWrapper hasMainImage={hasMainImage}>
      {children}
    </ContentWrapper>
    <Spacer />
  </PageWrapper>
);
