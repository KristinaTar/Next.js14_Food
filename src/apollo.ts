import {ApolloClient, InMemoryCache} from "@apollo/client";
import { useMemo } from "react";


function createApolloClient() {
  return new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      }
    }
  })
}

export function useApollo (){
  const client = useMemo(()=>createApolloClient(),[]);
  return client;
}