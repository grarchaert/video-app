import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/header'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { useState, createContext } from 'react';

export const MyAppContext = createContext({
  category: 0,
  setCategory: undefined,
});

function MyApp({ Component, pageProps }) {
  const [category, setCategory] = useState('');

  return (
    <ApolloProvider client={client}>
      <MyAppContext.Provider value={{category, setCategory}}>
        <Head>
          <title>Videos App</title>
          <meta name="description" content="Videos App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps}/>
      </MyAppContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp
