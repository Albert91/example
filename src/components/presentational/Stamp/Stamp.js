import React, { Component } from 'react';
import SustainableStamp from '../../svg/SustainableStamp';
import BoxStamp from '../../svg/BoxStamp';
import BioStamp from '../../svg/BioStamp';
import { StampContainer } from './style';

export default class Stamp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderCustomStamp = () => {
    if (this.props.stampName === 'sustainable') {
      return <SustainableStamp />;
    } else if (this.props.stampName === 'boxes') {
      return <BoxStamp />;
    } else if (this.props.stampName === 'bio') {
      return <BioStamp />;
    }
  };

  render() {
    return (
      <StampContainer position={this.props.position}>
        {this.renderCustomStamp()}
      </StampContainer>
    );
  }
}
