import React, { Component } from 'react';
import PropTypes from 'prop-types';

function accordion(AccordionWrapper, AccordionItemWrapper) {
  class Accordion extends Component {
    static propTypes = {
      allowMultipleOpen: PropTypes.bool,
      children: PropTypes.instanceOf(Object).isRequired,
    };

    static defaultProps = {
      allowMultipleOpen: false,
    };

    constructor(props) {
      super(props);

      const openSections = {};
      React.Children.map(this.props.children, (child) => {
        if (child.props.isOpen) {
          openSections[child.props.title] = true;
        }
      });

      this.state = { openSections };
    }

    toggleAccordionItem = (e) => {
      const { title } = e.currentTarget;
      const { openSections } = this.state;
      const { allowMultipleOpen } = this.props;
      const isOpen = !!openSections[title];

      if (allowMultipleOpen) {
        this.setState({
          openSections: {
            ...openSections,
            [title]: !isOpen,
          },
        });
      } else {
        this.setState({
          openSections: {
            [title]: !isOpen,
          },
        });
      }
    };

    render() {
      const { openSections } = this.state;
      const { children } = this.props;

      return (
        <AccordionWrapper>
          {React.Children.map(children, child => (
            <AccordionItemWrapper
              key={child.props.title}
              isOpen={!!openSections[child.props.title]}
              toggleItem={this.toggleAccordionItem}
              title={child.props.title}
            >
              {child.props.children}
            </AccordionItemWrapper>
          ))}
        </AccordionWrapper>
      );
    }
  }

  return Accordion;
}

export default accordion;
