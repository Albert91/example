import React from 'react';
import { SearchBarWrapper, Input, SubmitButton } from './style';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue ? props.defaultValue : '',
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.search(this.state.value);
  };

  render() {
    return (
      <SearchBarWrapper customStyle={this.props.customStyle}>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          />
          <SubmitButton type="submit" />
        </form>
      </SearchBarWrapper>
    );
  }
}
