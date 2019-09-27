import React, { useState } from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Button, ButtonGroup } from "react-bootstrap";
import "./ClothingList.scss";

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
  if (data) {console.log(data)};

  const [weight, setWeight] = useState(0);
  const [packed, setPacked] = useState([]);
  
  
  return (
    <>
      <div className="scroll-box">
        <div className="clothes-list">
          <h6 className="tips">Click to add!</h6>
          <ButtonGroup vertical>
            {data ?
            data.clothing.map(function(item, i) {
              return (
                <Button id="clothes-btn" key={i} value={item.weight} data-id={item.name} onClick={() => {setWeight(weight + item.weight); setPacked(packed + (" " + item.name))}} >{item.name}</Button>
              )
            })
            :
            <p>Nothing to see here yet!</p>
          }
              </ButtonGroup>
        </div>
      </div>
    </>
  )
}

export default ClothingList;
