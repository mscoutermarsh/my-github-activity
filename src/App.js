import React, { Component } from 'react';
import logo from './logo.png';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Comments from './Comments.js'
import './App.css';
import {CommentIcon, IssueOpenedIcon} from 'react-octicons'

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
            <CommentIcon className="mr-2"/> Recent comments
          </h1>
        </header>

        <div className="App-intro Box-body pl-2">

          <div className="Box-row">
            <IssueOpenedIcon className="ml-n3 float-left mr-2"/>
            <h3 className="text-small">Checks summary view is not responding</h3>
          </div>

        </div>

        <Comments comments={this.props.data.viewer.issueComments.nodes} />
      </div>
    );
  }
}

export default graphql(gql`
  {
    viewer {
      login
      issueComments(last: 20) {
        nodes {
          id
          issue {
            title
            repository {
              nameWithOwner
            }
          }
          bodyHTML
          bodyText
          createdAt
          url
        }
      }
    }
  }
`)(App);
