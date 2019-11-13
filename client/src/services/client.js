import ApolloClient from 'apollo-boost';
import { toast } from 'react-toastify';

let bearerToken;

export function setBearerToken(token) {
  bearerToken = token;
}

export default new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  request: operation => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: bearerToken,
      },
    }));
  },
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        toast.error(message);
      });
    }
  },
});
