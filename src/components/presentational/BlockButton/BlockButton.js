import React, { Component } from 'react';
import { Block } from './style';

export default class BlockButton extends Component {
  render() {
    return (
      <Block onClick={this.props.onClick}>
        {this.props.children}
      </Block>
    );
  }
}
