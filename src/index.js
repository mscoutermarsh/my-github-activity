import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

let TOKEN = "";

const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${TOKEN}` || null
    }
  });
  return forward(operation)
})

// authorization: localStorage.getItem('token') || null

// use with apollo-client
const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache()
});

const SOME_QUERY = gql`query {
  viewer {
    issueComments(last: 20) {
      nodes {
        id
        bodyHTML
        createdAt
        url
      }
    }
  }
}`;

client.query({ query: SOME_QUERY }).then(console.log);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
