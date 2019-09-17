import React, { Component } from 'react'

class ListOfWords extends React.Component {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class TestProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // const words = this.state.words;
    // words.push('marklar');
    this.state.words.push('marklar')
    this.setState({words: this.state.words});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Add </button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default TestProps