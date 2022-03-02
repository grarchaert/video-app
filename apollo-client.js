import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_URI_GRAPHQL
});
  
const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "x-account-key": process.env.NEXT_PUBLIC_X_ACCOUNT_KEY,
      }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;