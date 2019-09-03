import React, { Component } from 'react';
import { connect } from 'react-redux';

import I18n from '../../../lib/I18n';
import PageLayout from '../../presentational/PageLayout';
import ContentPage from '../../presentational/ContentPage';
import MarkdownAccordion from "../../presentational/MarkdownAccordion";
import BlockButton from "../../presentational/BlockButton";
import GenericItemsSlider from '../../containers/GenericItemsSlider';
import { Spacer } from "../../presentational/Generic";
import { BlocksRow, Description } from "./style";

import FaqIcon from '../../svg/Faq';
import DiseaseIcon from '../../svg/Disease';

import faqPost from './data/faqPost';
import sliderPosts from './data/sliderPosts';

import { scrollToRef } from '../../../utils/scroll';
import { sizes } from '../../../lib/Resolution';
import { updateResolutions } from '../../../redux/actions/ResolutionActions';

import searchTable from '../../hoc/SearchTable';
import PostService from '../../../services/PostService';

const PostSearchSlider = searchTable(GenericItemsSlider, PostService, 'posts');

class BlogView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faqPost: faqPost,
      sliderPosts: sliderPosts,
      fallbackPostSlug: null,
    };

    this.faqPostRef = null;
    this.sliderRef = null;

    const resolutionObject = {};
    Object.keys(sizes).forEach(type =>
      resolutionObject[type] = window.matchMedia(`(min-width:${sizes[type]}px)`).matches
    );
    this.props.updateResolutions(resolutionObject);
  }

  scrollToFaq = () => {
    scrollToRef(this.faqPostRef, -80);
  };

  scrollToSlider = () => {
    scrollToRef(this.sliderRef, -80);
  };

  render() {
    return (
      <PageLayout>
        <ContentPage title={I18n.t('component.view.blogView.title')}>
          <Spacer key="spacer-title" tiny />
          <Description>
            {I18n.t('component.view.blogView.description')}
          </Description>
          <Spacer key="spacer-description" tiny />
          <BlocksRow>
            <BlockButton onClick={this.scrollToFaq}>
              <FaqIcon />
              {I18n.t('component.view.blogView.faq')}
            </BlockButton>
            <BlockButton onClick={this.scrollToSlider}>
              <DiseaseIcon />
              {I18n.t('component.view.blogView.slider')}
            </BlockButton>
          </BlocksRow>

          <Spacer key="spacer-posts" tiny />
          <PostSearchSlider
            tableTitle={I18n.t('component.view.blogView.posts')}
            tableTitleResults={I18n.t('component.view.blogView.resultsTitle')}
            disablePagination={true}
            fallbackPostSlug={this.props.fallbackPostSlug}
            description={this.props.description}
            query={{ category: this.props.category, status: 'published' }}
            isMobile={!this.props.resolutions.tablet}
          />

          <Spacer key="spacer-faq" tiny />
          <MarkdownAccordion
            key="FAQList"
            title={I18n.t('component.view.blogView.faq')}
            content={this.state.faqPost.content}
            ref={r => { this.faqPostRef = r }}
          />

          <Spacer key="spacer-slider" />
          <GenericItemsSlider
            items={this.state.sliderPosts}
            title={I18n.t('component.view.blogView.slider')}
            fallbackPostSlug={this.state.fallbackPostSlug}
            ref={r => { this.sliderRef = r }}
            isMobile={!this.props.resolutions.tablet}
          />
        </ContentPage>
      </PageLayout>
    );
  }
}

const mapStateToProps = state => ({
  resolutions: state.resolutionData,
});

const mapDispatchToProps = dispatch => ({
  updateResolutions: resolutions => dispatch(updateResolutions(resolutions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogView);
