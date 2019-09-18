import React, { Component, useState } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import Questions from "../../components/Questions/Questions"
import "./Home.scss";

class Home extends Component {


  render() {
    return (
      <div className="homeBox">
        <Questions>
          
        </Questions>
      </div>
    );
  }
}

export default Home;