import React, { Component } from 'react';
import I18n from '../../../lib/I18n';
import {
  CookiesBtn,
  CookiesContainer,
  CookiesDescription,
  CookiesHeader,
  ExitIcon,
} from './style';

class Cookies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slide: false,
      isHidden: this.props.isHidden,
    }
  }

  handleAddCookie = () => {
    this.props.acceptCookies();
    this.setState({ slide: true });

    setTimeout(() => {
      this.setState(() => ({
        isHidden: this.props.isHidden,
      }));
    }, 3000);
  };

  render() {
    return this.state.isHidden ? null : (
      <CookiesContainer slide={this.state.slide} >
        <CookiesHeader>{I18n.t('component.cookies.title')}</CookiesHeader>
        <CookiesDescription source={I18n.t('component.cookies.content')} />
        <CookiesBtn onClick={this.handleAddCookie}>
          {I18n.t('component.cookies.buttonText')}
          <ExitIcon />
        </CookiesBtn>
      </CookiesContainer>
    );
  }
}

export default Cookies;
