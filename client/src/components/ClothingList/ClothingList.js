import React from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Button, ButtonGroup } from "react-bootstrap";
import "./ClothingList.scss";;


const GET_CLOTHINGLIST = gql `
    query getClothing($apparel: String!, $climate: String!) {
        clothing(apparel: $apparel, climate: $climate) {
            name 
            weight
      } 
    }`

export default function ClothingList(props) {

  const { loading, error, data } = useQuery(GET_CLOTHINGLIST, {
    variables: {apparel: props.apparel, climate: props.climate  }
   });
if (loading) console.log("Loading...")
console.log(props.climate)
if (error) console.log(error.message)
if (data) console.log(data)

return (
  <>
  { data ? 
  <>
  <div className="scroll-box">
  <div className="clothes-list">
  <h6 className="tips">Click an item to add it to your list</h6>
  <ButtonGroup vertical>
    
  </ButtonGroup>
  </div>
</div>
</>
: "Nothing to see here"}
</>
)
}




