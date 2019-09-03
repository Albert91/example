import React from 'react';
import PropTypes from 'prop-types';
import { ArrowWrapper } from './style';
import ArrowSVG from '../../../components/svg/Arrow';

const RoundArrow = props => (
  <ArrowWrapper {...props}>
    <ArrowSVG />
  </ArrowWrapper>
);

RoundArrow.defaultProps = {
  disabled: false,
};

RoundArrow.propTypes = {
  arrowType: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
};

export default RoundArrow;
