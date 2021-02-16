import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import fetch from 'isomorphic-unfetch';

const cache = new InMemoryCache();
const link =  createHttpLink({
    uri: 'https://prisma.dofusapp.fr',
    credentials: 'same-origin',
    fetch,
});

export default new ApolloClient({
  // Provide required constructor fields
  cache,
  link,
  // Provide some optional constructor fields
  version: '1.3',
  queryDeduplication: false,
  ssrMode: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});