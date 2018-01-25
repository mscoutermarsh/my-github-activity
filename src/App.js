import React, { Component } from 'react';
import logo from './logo.png';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './App.css';
import {CommentIcon} from 'react-octicons'

class App extends Component {
  render(props) {
    console.log(this.props);
    if (this.props.data.loading) {
      return (
        <div className="App">Loading...</div>
      );
    }

    return (
      <div className="App Box Box--condensed">

        <header className="App-header Box-header">
          <h1 className="App-title Box-title">Recent comments <CommentIcon/></h1>
        </header>

        <div className="App-intro Box-body">
          I am {this.props.data.viewer.login}
        </div>
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
