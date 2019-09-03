import React from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  FloatContent,
  FloatBackground,
  Title,
  Container,
  Feed,
  FloatBackgroundColor,
  Subtitle,
  TitleWrapper,
} from './style';

class ColumnRowGeneric extends React.PureComponent {
  render() {
    const {
      marginBottom,
      className,
      pageWidthChildren,
      itemCount,
      customRowStyle,
      customBackgroundStyle,
      getRef,
      title,
      subtitle,
      horizontalScroll,
      children,
      stickyPadding,
      disableFeed,
    } = this.props;

    return (
      <Content marginBottom={marginBottom} className={className}>
        {pageWidthChildren}
        <Container stickyPadding={stickyPadding}>
          <FloatBackground>
            <FloatBackgroundColor
              count={itemCount}
              customBackgroundStyle={customBackgroundStyle}
            />
            <TitleWrapper>
              <Title
                hasSubtitle={!!subtitle}
                ref={getRef}
              >
                {title}
              </Title>
              <Subtitle>{subtitle}</Subtitle>
            </TitleWrapper>
            <FloatContent>
              {disableFeed ? children : (
                <Feed
                  count={itemCount}
                  horizontalScroll={horizontalScroll}
                  customRowStyle={customRowStyle}
                >
                  {children}
                </Feed>
              )}
            </FloatContent>
          </FloatBackground>
        </Container>
      </Content>
    );
  }
}

ColumnRowGeneric.defaultProps = {
  marginBottom: 0,
  horizontalScroll: false,
  innerRef: () => false,
  pageWidthChildren: false,
  itemCount: 0,
  stickyPadding: false,
};

ColumnRowGeneric.propTypes = {
  children: PropTypes.node.isRequired,
  pageWidthChildren: PropTypes.node,
  itemCount: PropTypes.number,
  marginBottom: PropTypes.number,
  title: PropTypes.string.isRequired,
  horizontalScroll: PropTypes.bool,
  innerRef: PropTypes.func,
  stickyPadding: PropTypes.bool,
};

export default ColumnRowGeneric;
