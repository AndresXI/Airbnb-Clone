import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


export const client = new ApolloClient({
  link:
    new HttpLink({
      // server url to make requests
      uri: process.env.REACT_APP_SERVER_URL,
      credentials: 'same-origin'
    }),
  cache: new InMemoryCache()
});