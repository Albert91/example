import styled from 'styled-components/macro';
import { css } from 'styled-components';
import leafSVG from '../../../images/leaf_button.svg';
import {
  OrangeColor,
  GreenColor,
  LighterGreenColor
} from '../../../lib/variables';
import Resolution from '../../../lib/Resolution';

export const StyledButton = styled.button`
  font-family: GTEestiProRegular;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 1.67;
  letter-spacing: 1px;
  border-radius: 100px;
  outline: 0;
  text-align: center;
  height: 51px;
  padding: ${({ leaf }) => (leaf ? '9px 30px' : '0 30px')};
  font-weight: 400;
  border: none;
  box-shadow:  ${({ leaf }) => (leaf ? '0 0 0 7px #fdf1ed' : 'none')};
  transition: background-color 0.2s ease;

  ${props => props.customStyle};
  ${Resolution.desktop`${props => props.customDesktopStyle};`};
  ${Resolution.tablet`${props => props.customTabletStyle};`};

  > svg {
    margin-left: 5px;
  }

  &.primary {
    color: #ffffff;
    background-color: ${GreenColor};

    &:hover {
      background: ${LighterGreenColor};
      color: #fff;
    }
  }

  &.tomato {
    color: ${OrangeColor};
    background-color: #ffffff;
    border: solid 2px ${OrangeColor};

    svg {
      stroke: ${OrangeColor};
    }

    &:hover {
      background: ${OrangeColor};
      color: #fff;

      svg {
        stroke: #fff;
      }
    }
  }

  ${({ leaf }) => leaf && css`
    &:after {
      display: ${props => (props.scrollButton ? 'none' : 'block')};
      position: absolute;
      content: '';
      top: -10px;
      right: -10px;
      width: 16px;
      height: 16px;
      background-image: url('${leafSVG}');
      background-repeat: no-repeat;
    }
  `}
`;
