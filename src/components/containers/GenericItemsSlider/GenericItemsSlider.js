import React, { Component } from 'react';

import I18n from '../../../lib/I18n';
import ColumnRowGenericItem from '../../presentational/ColumnRowGenericItem';
import Markdown from '../../presentational/Markdown';
import ComponentSlider from '../../presentational/Slider/ComponentSlider';
import { ComponentContainer } from '../../presentational/Generic';
import ColumnRowGeneric from '../../presentational/ColumnRowGeneric';

class GenericItemsSlider extends Component {
  renderItem(item) {
    return (
      <ColumnRowGenericItem
        type="posts"
        item={item}
        key={item.id}
      />
    )
  }

  renderPostFallback = () => {
    const { fallbackPost } = this.props;
    if (fallbackPost) {
      return (<Markdown source={fallbackPost.content} />);
    }

    return (<span>{I18n.t('component.view.blogView.noResults')}</span>);
  };

  renderItems = (items) => {
    const isMobile = this.props.isMobile;
    let slidesToShow = 3;
    let slidesToScroll = 3;

    if (isMobile) {
      slidesToShow = 1;
      slidesToScroll = 1;
    }

    const settings = {
      slidesToShow,
      slidesToScroll,
      lazyLoad: true,
      infinite: (items.length > slidesToShow),
      centerPadding: isMobile ? '10px' : '50px',
      centerMode: isMobile,
      arrows: true,
      dots: !isMobile,
      dotsClass: 'slick-dots slick-posts-dots',
    };

    return (
      <ColumnRowGeneric
        stickyPadding
        title={this.props.title}
        customBackgroundStyle="top:25px; height:100%;"
        disableFeed
      >
        <ComponentSlider arrowPosition="70px" settings={settings}>
          {items.map(item => this.renderItem(item))}
        </ComponentSlider>
      </ColumnRowGeneric>
    )
  };

  render() {
    const { items } = this.props;

    return (
      <ComponentContainer>
        {items.length > 0 ? this.renderItems(items) : this.renderPostFallback()}
      </ComponentContainer>
    )
  }
}

export default GenericItemsSlider;
