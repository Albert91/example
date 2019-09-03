import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import I18n from '../../lib/I18n';
import Pagination from '../presentational/Pagination';
import SearchBar from '../presentational/SearchBar';
import ContentSpinner from '../presentational/ContentSpinner';
import { Spacer } from '../presentational/Generic';
import Stamp from '../presentational/Stamp';
import Markdown from '../presentational/Markdown';
import { scrollToRef } from '../../utils/scroll';

import PostService from "../../services/PostService";

const PerPage = 3;

function searchTable(Table, ItemsService, itemsProp) {
  class SearchTable extends Component {
    constructor(props) {
      super(props);

      let
        param = null,
        params = {},
        query = this.props.location.search.slice(1).split('&');

      if (query.length > 0) {
        params = query.map(field => {
          param = field.split('=');
          return {
            [param[0]]: param[1]
          };
        });
      }

      this.state = {
        dataInfoReady: false,
        metadata: false,
        items: [],
        fallbackPost: null,
        query: {
          q: params.q || '',
          p: params.p || 1,
          pp: this.props.perPage || PerPage,
          ...props.query,
        },
      };

      this.searchBarComponent = null;
    }

    componentDidMount() {
      this.search(this.state.query);
    }

    componentWillUnmount() {
      window.onpopstate = null;
    }

    componentWillReceiveProps(nextProps) {
      const { query } = this.props;
      if (query.q !== nextProps.query.q) {
        this.search(nextProps.query);
      }
    }

    componentDidUpdate(prevProps, nextContext) {
      const { query } = this.state;

      if (prevProps.location.search !== '' && this.props.location.search === '') {
        this.search({
          q: '',
        });

        this.searchBarComponent.state.value = '';
      }

      if (this.searchBarComponent && query.p !== nextContext.query.p && query.q === nextContext.query.q) {
        scrollToRef(this.searchBarComponent, 20, 500);
      }
    }

    search = (query) => {
      const newQuery = {
        ...this.state.query,
        ...query,
      };

      ItemsService
        .search(newQuery)
        .then((res) => {
          const items = res[itemsProp];
          this.setState({
            query: newQuery,
            dataInfoReady: true,
            items: items,
            metadata: res.metadata,
          });

          if (!this.props.disableSearchBar) {
            this.updateQueryParams();
          }

          if (res[itemsProp].length !== 0 || !this.props.fallbackPostSlug) {
            return true;
          }

          PostService
            .search({
              slug: this.props.fallbackPostSlug,
              pp: 1,
            })
            .then((res) => {
              this.setState({
                fallbackPost: res.posts[0]
              });
            });
        })
    };

    updateQueryParams() {
      const { query: { q, p } } = this.state;

      if(q === '' && p === 1) {
        return this.props.history.push(this.props.location.pathname);
      }

      return this.props.history.push(`${this.props.location.pathname}?q=${this.state.query.q}&p=${this.state.query.p}`);
    }

    handlePageChange = (pageNumber) => {
      const query = {
        ...this.state.query,
        p: pageNumber,
      };

      this.search(query);
    };

    handleSearch = (searchText) => {
      this.search({ q: searchText, p: 1 });
    };

    renderItems() {
      const {
        query: { q },
        items,
        metadata,
        fallbackPost,
      } = this.state;

      const {
        description,
        location,
        tableTitle,
        tableTitleResults,
      } = this.props;

      const title = (q !== '' && tableTitleResults) ? tableTitleResults : tableTitle;

      return (
        <div>
          {description && [
            <Stamp
              key="stamp"
              stampName="sustainable"
              position="position:absolute; top:60px; right:-60px;"
            />,
            <Markdown
              key="stamp"
              source={description}
            />,
          ]}

          {!this.props.disableSearchBar && (metadata.recordInfo.total > PerPage || q !== '') && [
            <SearchBar
              key="search"
              customStyle="float: inherit; width: 100% !important; font-size: 1.2em;"
              search={this.handleSearch}
              placeholder={I18n.t('component.searchBar.placeholder')}
              defaultValue={q}
              ref={ref => this.searchBarComponent = ref}
            />,
            <Spacer key="spacer" tiny />
          ]}

          <Table
            title={title}
            items={items}
            fallbackPost={fallbackPost}
            isMobile={this.props.isMobile}/>

          {!this.props.disablePagination && metadata.recordInfo.total > PerPage && [
            <Spacer key="spacer" small />,
            <Pagination
              key="pagination"
              url={(`${location.pathname}${location.search}`)}
              onClick={this.handlePageChange}
              metadata={metadata}
            />,
          ]}
        </div>
      )
    }

    render() {
      return (
        <div>
          {this.state.dataInfoReady ? this.renderItems() : <ContentSpinner />}
        </div>
      );
    }
  }

  return withRouter(SearchTable);
}

export default searchTable;
