import React, { Component } from 'react';
import logo from './logo.png';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Comments from './Comments.js'
import './App.css';
import {CommentIcon, IssueOpenedIcon, BellIcon} from 'react-octicons'

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

        <header className="App-header Box-header py-3 px-2">
          <h1 className="App-title Box-title">
            <CommentIcon className="mr-2 octicon-top-nudge"/> My recent comments
            <a href="https://github.com/notifications" className="float-right d-block octicon-top-nudge mr-2">
              <BellIcon/>
            </a>
          </h1>
        </header>

        <div className="App-intro">

          <Comments comments={this.props.data.viewer.issueComments.nodes} />

        </div>
      </div>
    );
  }
}

export default graphql(gql`
  {
    viewer {
      login
      issueComments(last: 40) {
        nodes {
          id
          issue {
            number
            url
            title
            repository {
              nameWithOwner
            }
          }
          bodyHTML
          bodyText
          createdAt
          url
          pullRequest {
            id
          }
        }
      }
    }
  }
`)(App);
