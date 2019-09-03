import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AccordionItemWrapper,
  AccordionTitle,
  AccordionTextWrapper,
} from './style';
import HeightTransition from '../../../components/transitions/HeightTransition';
import ToggleButton from '../ToggleButton';

class MarkdownAccordionItem extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    toggleItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.animationHeight = 0;
  }

  setAnimationHeight(element) {
    if (element) {
      this.animationHeight = element.offsetHeight;
    }
  }

  render() {
    const {
      children, title, isOpen, toggleItem,
    } = this.props;

    return (
      <AccordionItemWrapper>
        <AccordionTitle title={title} onClick={toggleItem}>
          {title}
          <ToggleButton isOpen={isOpen} />
        </AccordionTitle>
        <HeightTransition in={isOpen} maxHeight={this.animationHeight} timeout={500}>
          <AccordionTextWrapper ref={this.setAnimationHeight.bind(this)}>
            {children}
          </AccordionTextWrapper>
        </HeightTransition>
      </AccordionItemWrapper>
    )
  }
}

export default MarkdownAccordionItem;

