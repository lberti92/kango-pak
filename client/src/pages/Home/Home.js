import React, { Component, useState } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import Questions from "../../components/Questions/Questions";
import ClothingList from "../../components/ClothingList/ClothingList";
import "./Home.scss";

class Home extends Component {

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
      <div className="homeBox">
        <Questions>
        </Questions>
        <ClothingList>
          <h1>Clothes here:</h1>
        </ClothingList>
      </div>
      </>
    );
  }
}

export default Home;