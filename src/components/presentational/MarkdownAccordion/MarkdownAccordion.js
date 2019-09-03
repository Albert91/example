import React, { Component } from 'react';

import { H2 } from '../Generic';
import Markdown from '../../presentational/Markdown';
import { Wrapper, Content, AccordionItemsWrapper } from './style';

import accordion from '../../hoc/Accordion';
import MarkdownAccordionItem from './MarkdownAccordionItem';

const AccordionWithMarkdown = accordion(AccordionItemsWrapper, MarkdownAccordionItem);

export default class MarkdownAccordion extends Component {
  getList(infoMarkdown) {
    return infoMarkdown
      .split('#')
      .filter(e => e)
      .map((e) => {
        const titleEnd = e.indexOf('\n');
        const title = e.substr(0, titleEnd);
        const text = e.substr(titleEnd + 1, e.length);
        return { title, text };
      });
  }

  render() {
    const { content, title, withPadding } = this.props;

    return (
      <Wrapper>
        <Content withPadding={withPadding}>
          <H2>{title}</H2>

          <AccordionWithMarkdown>
          {this.getList(content).map(e => (<div title={e.title} key={e.title}><Markdown source={e.text} /></div>))}
          </AccordionWithMarkdown>
        </Content>
      </Wrapper>
    );
  }
}
