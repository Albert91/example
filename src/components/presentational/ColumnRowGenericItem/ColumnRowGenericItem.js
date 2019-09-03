import React, { Component } from 'react';
import { Card, CardContent, TextWrapper, Title, Summary, ImageWrapper, SimpleImage } from './style';

export default class ColumnRowGenericItem extends Component {
  render() {
    const { item, type } = this.props;
    const title = (type === 'items') ? item.name : item.title;

    return (
      <Card>
        <CardContent>
          <ImageWrapper>
            <SimpleImage src={item.src} alt={title} />}
          </ImageWrapper>
          <TextWrapper>
            <Title>
              {title}
            </Title>
            <Summary>
              {item.summary}
            </Summary>
          </TextWrapper>
        </CardContent>
      </Card>
    );
  }
}
