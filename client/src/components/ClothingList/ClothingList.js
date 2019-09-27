import React, { useState, useEffect } from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Button, ButtonGroup, Col } from "react-bootstrap";
import "./ClothingList.scss";
import Packed from "../Packed";

const GET_CLOTHINGLIST = gql`
    query getClothing($apparel: String!, $climate: String!) {
        clothing(apparel: $apparel, climate: $climate) {
            name 
            weight
      } 
    }`

const ClothingList = (props) => {
  const { loading, error, data } = useQuery(GET_CLOTHINGLIST, {
    variables: { apparel: props.apparel, climate: props.climate }
  });
  if (loading) console.log("Loading...")
  console.log(props.climate)
  if (error) console.log(error.message)
  if (data) { console.log(data) };
  const [weight, setWeight] = useState(0);
  const [packed, setPacked] = useState([]);
  // const [weightAllowed, setWeightAllowed] = useState(0);
  const [message, setMessage] = useState("")
  console.log(weightAllowed);
  console.log(weight);

  let weightAllowed = 0;

  // function handleSwitch(weight) {
    // event.preventDefault();
    let luggageType = props.luggage;
    //switch case for setting weight 
    //assume bag and what an empty bag weighs figured in 
    switch (luggageType) {
      case "travel backpack":
        //assuming a travel backpack (all weight is in kg) that weighs 3lbs empty
        console.log(weight);
        weightAllowed = 7.71;
        break;       
      case "wheeled carry-on":
        //assuming a wheeled carry on that weighs 6lbs empty
        weightAllowed = 10.88;
        break;
      case "medium checked bag":
        //assuming a medium checked bag that weighs 9lbs empty 
        weightAllowed = 14;
        break;
       
      case "large checked bag":
        //assuming a large checked bag that weighs 12lbs empty 
        weightAllowed = 20.5;
        break;
      default:
        console.log("Not a Hacker");
        break;
  }

  const setMaxWeight = item => {
    if ((weight + item )> weightAllowed) {
      return alert("you're overpacked");
    } else {
      setWeight(weight + item)
    }
  }
  return (
    <>
      <div className="scroll-box">
        <div className="clothes-list">
          <h6 className="tips">Click to add!</h6>
          <ButtonGroup vertical>
            {data ?
              data.clothing.map(function (item, i) {
                return (
                  <Button id="clothes-btn" 
                  key={i} value={item.weight} 
                  data-id={item.name} 
                  onClick={() => { 
                    setPacked(packed + (" " + item.name)); 
                    setMaxWeight(item.weight)}} >
                  {item.name}
                  </Button>
                )
              })
              :
              <p>Nothing to see here yet!</p>
            }
          </ButtonGroup>
        </div>
      </div>
      <Col>
        <Packed packed={packed} location={props.location} />
        {/* <Luggage></Luggage> */}
      </Col>
    </>
  )
}

export default ClothingList;
