import styled from 'styled-components/macro';
import { GreenColor, LighterGreenColor } from '../../../lib/variables';
import Resolution from '../../../lib/Resolution';

export const Block = styled.div`
  color: white;
  padding: 12px;
  background: ${GreenColor};
  transition: background-color 0.2s ease;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
    margin-top: 10px;
  }
  &:hover {
    background: ${LighterGreenColor};
    cursor: pointer;
  }
  svg {
    padding: 0 12px 0 0;
    width: 65px;
    height: 65px;
  }

  ${Resolution.tablet`
    font-size: 1.5em;
    max-height: 105px;
    padding: 25px 50px;
    margin: 0 10px 0 0;
    &:last-of-type {
      margin: 0 0 0 10px;
    }
    svg {
      padding: 0;
      margin-right: 12px;
      width: 65px;
      height: 65px;
    }
  `};
`;
