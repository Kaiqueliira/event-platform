import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o6ofxy0tsa01z70dde1oyi/master"

})