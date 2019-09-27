import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const ADD_PACKINGLIST = gql`
mutation AddPackingList($tripId: String!, $items: String!, $weight: Float!) {
    addPackingList(tripId: $tripId, items: $items, weight: $weight) {
      _id
      items
      weight
    }
  }
`

export default function Packed(props) {
    const [addPackingList, { data }] = useMutation(ADD_PACKINGLIST);
    if (data) console.log(data);

    const handleClick = () => {
        addPackingList({ variables: { tripId: props.tripId, items: props.items, weight: props.weight  }});
        if (data) window.location = "/profile"
    }

    return (
        <>    
                    <Card>
                        <Card.Body>
                            <Card.Title>Your Packing List for: {props.location} </Card.Title>
                            <Card.Text>
                                {props.packed}
                            </Card.Text>
                            <Card.Link href="#" onClick={handleClick}>Ready to Pack!</Card.Link>
                        </Card.Body>
                    </Card>
        
          </>
    )
};

