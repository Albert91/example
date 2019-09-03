import styled from 'styled-components/macro';
import { GreyColor, OrangeColor } from '../../../lib/variables';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PagesLabel = styled.div`
  display: flex;
  padding: 0 25px;
`;

export const ArrowWrapper = styled.div`
  overflow: hidden;
  display: inline-block;
  padding: 12px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: ${({ disabled }) => (disabled ? GreyColor : OrangeColor)};
  z-index: 4;
  transform: rotate(${({ arrowType }) => (arrowType === 'left' ? '0deg' : '180deg')});
`;
