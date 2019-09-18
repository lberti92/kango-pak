import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
// import NoMatch from "./pages/NoMatch";
import Navigation from "./components/TopNav";
import Footer from "./components/Footer";
import UserProvider from "./contexts/UserProvider";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ApolloClient from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { createHttpLink } from "apollo-link-http";
// import { ApolloProvider } from "@apollo/react-hooks";
// const httpLink = createHttpLink({
//   uri: "/graphql"
// });
// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });


function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <>
        <UserProvider>
          <Navigation />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth action="login" />} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Container>
          </UserProvider>
          <Footer />
        </>
      </Router>
      // </ApolloProvider>
  );
}

export default App;
