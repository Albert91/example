import styled from 'styled-components/macro';
import Resolution from '../../../lib/Resolution';

export const StampContainer = styled.div`
  display: none;
  overflow: hidden;
  ${props =>
  (props.position
    ? props.position
    : 'position: absolute;' +
    'top: 0;' +
    'right:0;' +
    'left: 0;')} height: 150px;
  width: 150px;

  ${Resolution.hd`
    display: block;
  `};
`;
