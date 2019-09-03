import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components/macro';
import Cookies from './Cookies';
import backgroundLeaf1 from '../../images/background-leaf-1.svg';
import backgroundLeaf2 from '../../images/background-leaf-2.svg';

import { acceptCookies } from '../../redux/actions/CookiesActions';

export const Page = styled.div`
  position: relative;
  ${({ longPage }) => longPage ? `
    background: url('${backgroundLeaf1}'), url('${backgroundLeaf2}');
    background-position: left -830px, right 75%;
    background-repeat: no-repeat, no-repeat;
  ` : `
    background: url('${backgroundLeaf1}');
    background-position: left -830px;
    background-repeat: no-repeat;
  `
  }
  ${({ customStyle }) => customStyle}
`;

class PageLayout extends Component {
  constructor(props) {
    super(props);
    this.body = document.querySelector('body');
  }

  render() {
    return (
      <Page
        customStyle={this.props.customStyle}
        longPage={this.props.longPage}
      >
        {this.props.children}
        <Cookies acceptCookies={this.props.acceptCookies} isHidden={this.props.acceptedCookies} />
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  acceptedCookies: state.cookiesData.acceptedCookies,
  // resolution: state.resolutionData,
});

const mapDispatchToProps = dispatch => ({
  acceptCookies: () => dispatch(acceptCookies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageLayout));
