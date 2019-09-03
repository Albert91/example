import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.div`
  max-width: 820px;
  margin: 0 auto 0 auto;
  ${({ withPadding }) => withPadding ? 'padding 0 20px' : 'padding: 0'};
`;

export const AccordionItemsWrapper = styled.div`
  border-bottom: 1px solid black;
`;

export const AccordionItemWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const AccordionTitle = styled.h2`
  position: relative;
  text-align: left;
  border-top: 1px solid black;
  font-size: 20px;
  min-height: 58px;
  letter-spacing: 0.5px;
  padding: 14px 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionTextWrapper = styled.div`
  padding: 15px 0 40px 0;
  line-height: 1.65;
  font-size: 17px;
  letter-spacing: 0.5px;
  a {
    color: #6699cc !important;
  }
`;
