import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "https://growth-app.hasura.app/v1/graphql"
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            ...headers,
            'x-hasura-admin-secret': "@tinuS321",
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const apollo_client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        addTypename: false
    })
});

export default apollo_client;

