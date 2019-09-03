import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components/macro';
import { P } from '../Generic';
import RoundArrow from '../../presentational/Pagination/RoundArrow';

import './style.css';

const SliderWrapper = styled.div`
  ${({ customStyle }) => customStyle};
`;

const RoundArrowWrapper = styled.div`
  position: absolute;
  top: calc(50% - ${({ arrowPosition }) => (arrowPosition ? arrowPosition : '10px')});
  ${({ arrowType }) => (arrowType === 'left' ? 'left: 4px;' : 'right: 4px;')}
  z-index: 1;
  cursor: pointer;
`;

function SlickArrow(props) {
  const { arrowType, onClick, arrowPosition } = props;

  return (
    <RoundArrowWrapper onClick={onClick} arrowType={arrowType} arrowPosition={arrowPosition}>
      <RoundArrow
        arrowType={arrowType}
        onClick={onClick}
      />
    </RoundArrowWrapper>
  );
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  setActualIndex = currentSlide => this.setState({ currentSlide });

  render() {
    const {
      customStyle,
      children,
      title,
      arrowPosition,
      settings,
    } = this.props;

    settings.prevArrow = <SlickArrow arrowPosition={arrowPosition} arrowType="left" />;
    settings.nextArrow = <SlickArrow arrowPosition={arrowPosition} arrowType="right" />;

    const numberOfSlides = children.length;
    return (
      <SliderWrapper
        customStyle={customStyle}
        currentSlide={this.state.currentSlide}
        numberOfSlides={numberOfSlides - 1}
      >
        <P customStyle="text-align: center;">{title}</P>
        <Slider
          {...settings}
          afterChange={this.setActualIndex}
        >
          {children}
        </Slider>
      </SliderWrapper>
    );
  }
}
