import React, { Component } from 'react';
import logo from './logo.png';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './App.css';

class App extends Component {
  render(props) {
    console.log(this.props);
    if (this.props.data.loading) {
      return (
        <div className="App">Loading...</div>
      );
    }

    return (
      <div className="App Box">
        <header className="App-header Box-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro Box-body">
          I am {this.props.data.viewer.login}
        </p>
      </div>
    );
  }
}

export default graphql(gql`
  query {
    viewer {
      login
      issueComments(last: 20) {
        nodes {
          id
          bodyHTML
          createdAt
          url
        }
      }
    }
  }
`)(App);
