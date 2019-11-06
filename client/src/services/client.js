import ApolloClient, { InMemoryCache } from 'apollo-boost';

const appCache = new InMemoryCache();

export default new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  request: operation => {
    const token = localStorage.getItem('@rocketseat/token');

    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }));
  },
  clientState: {
    defaults: {
      authStatus: {
        __typename: 'authStatus',
        status: 'loggedOut',
      },
    },
  },
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        if (message === 'Unauthorized') {
          localStorage.removeItem('@rocketseat/token');
          appCache.writeData({
            data: {
              authStatus: {
                __typename: 'authStatus',
                status: 'loggedOut',
              },
            },
          });
        }
      });
    }
  },
});
