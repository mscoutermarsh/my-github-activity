import React, { Component } from 'react';
import logo from './logo.png';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Comments from './Comments.js'
import './App.css';
import {CommentIcon, IssueOpenedIcon, BellIcon, SyncIcon} from 'react-octicons'

class App extends Component {
  render(props) {
    if (this.props.data.loading) {
      return (
        <div className="App Extension--container text-center p-4">Loading... <SyncIcon className="spin text-gray"/></div>
      );
    }

    return (
      <div className="App Box Box--condensed Extension--container">

        <header className="App-header Box-header py-3 px-2">
          <h1 className="App-title Box-title">
            <CommentIcon className="mr-2 octicon-top-nudge"/> My recent comments
            <a href="https://github.com/notifications" className="float-right d-block octicon-top-nudge mr-2" target="_blank">
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
            state
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
            state
          }
        }
      }
    }
  }
`)(App);
