import styled from 'styled-components/macro';
import Resolution from '../../../lib/Resolution';
import searchIcon from '../../../images/search.svg';
import { GreenColor } from '../../../lib/variables'

export const SearchBarWrapper = styled.div`
  float: left;
  margin-left: 0px;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  
  ${Resolution.tablet`
    margin-left: 0px;
    width: inherit;

    display: inline-block;
    width: 16em;

    input {
      display: block;
    }
  `};

  ${({ customStyle }) => `${customStyle}`};
`;

export const Input = styled.input`
  -webkit-appearance: none;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 0px;
  box-shadow: none;
  box-sizing: border-box;
  font-family: Avenir;
  font-size: 1em;
  padding: .5em;
  -webkit-transition: border-color;
  transition: border-color;
  width: 100%;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0.4em;
  top: 0.6em;
  border-radius: 50%;
  background-color: ${GreenColor};
  border: none;
  outline:none;
  padding: 14px;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    top: 6px;
    left: 4px;
    height: 20px;
    width: 100%;
    background-image: url('${searchIcon}');
    background-size: 60%;
    background-repeat: no-repeat;
  }
`;
