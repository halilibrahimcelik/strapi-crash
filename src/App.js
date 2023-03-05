import AppRouter from "./routes/AppRouter";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//ApolloClient to connect strapi graphql server
//InMemoryCache  to cache responses from the server
//ApolloPRovider to wrap our app data management app

//apollo client

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
