import React, { Component, useState } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import Header  from "../../components/Header/Header";
import Questions from "../../components/Questions/Questions"
import "./NewTrip.scss";

class NewTrip extends Component {

  state = {
    loggedIn: false,
  };

  componentDidMount() {
    this.loggedIn();
  }

  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <>
      <Header />
      <div className="homeBox">
        <Questions>
        </Questions>
      </div>
      </>
    );
  }
}

export default NewTrip;