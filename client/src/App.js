import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import Navigation from "./components/TopNav";
import Footer from "./components/Footer";
import UserProvider from "./contexts/UserProvider";
import { Container } from 'reactstrap';


function App() {
  return (
      <Router>
        <>
        <UserProvider>
          <Navigation />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              
              <Route exact path="/signup" render={(props) => <Auth action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth  action="login" />} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route component={NoMatch} /> */}
              
            </Switch>
          </Container>
          </UserProvider>
          <Footer />
        </>
      </Router>
  );
}

export default App;
