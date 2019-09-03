import React, { PureComponent } from 'react';
import shortcodes from 'remark-shortcodes';
import { Link } from 'react-router-dom';
import Button from '../../presentational/Button';
import { H1, H2, H3, H4, H5, OL, UL, LI, P } from '../Generic';
import { urlTypeResolver } from '../../../utils/url';
import { StyledMarkdown } from './style';

const renderers = {
  shortcode: (props) => {
    switch (props.identifier) {
      case 'button':
        let { text, url } = props.attributes;
        return (<Button linkTo={url}>{text}</Button>);

      case 'anchor':
        return (
          <div style={{ position: 'relative' }}>
            <a name={props.attributes.name} style={{ position: 'absolute', top: '-50px' }}></a>
          </div>
        );

      default:
        return false;
    }
  },
  link: (props) => {
    switch(urlTypeResolver(props.href)) {
      case "external":
        return (
          <a href={props.href} target="_blank">
            {props.children}
          </a>
        );
      case "internal":
        return (
          <Link href={props.href} to={props.href}>
            {props.children}
          </Link>
        );
      default:
        return <a href={props.href}>{props.children}</a>;
    }
  },
  paragraph: props => <P>{props.children}</P>,
  heading: (props) => {
    switch (props.level) {
      case 1:
        return <H1>{props.children}</H1>;
      case 2:
        return <H2>{props.children}</H2>;
      case 3:
        return <H3>{props.children}</H3>;
      case 4:
        return <H4>{props.children}</H4>;
      default:
        return <H5>{props.children}</H5>;
    }
  },
  list: (props) => {
    if (props.ordered) {
      return <OL>{props.children}</OL>;
    }
    return <UL>{props.children}</UL>;
  },
  listItem: props => <LI>{props.children}</LI>,
};

class Markdown extends PureComponent {
  render() {
    let { source } = this.props;

    return (
      <StyledMarkdown
        renderers={renderers}
        plugins={[shortcodes]}
        {...this.props}
        source={source}
      />
    );
  }
}

export default Markdown;
