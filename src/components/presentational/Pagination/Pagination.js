import React from 'react';
import { PaginationWrapper, PagesLabel } from './style';
import RoundArrow from './RoundArrow';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  previousPage = (event) => {
    event.preventDefault();

    const meta = this.props.metadata;
    if (meta.previous.page === meta.pageInfo.current) {
      return false;
    }

    this.props.onClick(meta.previous.page);
  };

  previousPageUrl() {
    return this.props.url.replace(
      new RegExp(/(p=[0-9]*)/),
      `p=${this.props.metadata.previous.page}`
    );
  }

  nextPage = (event) => {
    event.preventDefault();

    const meta = this.props.metadata;
    if (meta.next.page === meta.pageInfo.current) {
      return false;
    }

    this.props.onClick(meta.next.page);
  };

  nextPageUrl() {
    return this.props.url.replace(
      new RegExp(/(p=[0-9]*)/),
      `p=${this.props.metadata.next.page}`
    );
  }

  pageLabel() {
    const meta = this.props.metadata;

    if (meta.pageInfo.total > 1) {
      return `${meta.pageInfo.current} of ${meta.pageInfo.total}`;
    }

    return '1 of 1';
  }

  render() {
    const meta = this.props.metadata;

    return (
      <PaginationWrapper>
        <a href={this.previousPageUrl()} onClick={this.previousPage}>
          <RoundArrow arrowType="left" disabled={meta.previous.page === meta.pageInfo.current} />
        </a>
        <PagesLabel>{this.pageLabel()}</PagesLabel>
        <a href={this.nextPageUrl()} onClick={this.nextPage}>
          <RoundArrow arrowType="right" disabled={meta.next.page === meta.pageInfo.current} />
        </a>
      </PaginationWrapper>
    );
  }
}
