import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledButton } from './style'
import Arrow from '../../svg/ArrowDown';
import { urlTypeResolver } from '../../../utils/url';

StyledButton.defaultProps = {
  className: "primary",
  linkTo: null,
  leaf: false,
};
StyledButton.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  leaf: PropTypes.bool,
  customStyle: PropTypes.string,
  customDesktopStyle: PropTypes.string,
  customTabletStyle: PropTypes.string,
};

const Button = ({ element, children, ...props }) => {
  if (!props.linkTo) {
    return (
      <StyledButton {...props}>
        {children} {props.scroll && <Arrow angle={props.arrowAngle} />}
      </StyledButton>
    );
  }

  switch (urlTypeResolver(props.linkTo)) {
    case "external":
      return (
        <a href={props.linkTo} target="_blank" rel="noopener noreferrer">
          <StyledButton {...props}>
            {children}
            <Arrow angle="270" />
          </StyledButton>
        </a>
      );
    case "internal":
      return (
        <Link to={props.linkTo}>
          <StyledButton {...props}>
            {children}
            <Arrow angle="270" />
          </StyledButton>
        </Link>
      );
    case "anchor":
      return (
        <Link to={props.linkTo}>
          <StyledButton {...props}>
            {children}
            <Arrow />
          </StyledButton>
        </Link>
      );
    default:
      return null;
  }
};

export default Button;
