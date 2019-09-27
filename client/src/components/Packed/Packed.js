import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Packed.scss";
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

    console.log(props);
    return (
        <>
            <Card id="packing-list-card">
                <Card.Body>
                    <Card.Title>Your Packing List for: {props.location} </Card.Title>
                    <Card.Text>
                        <ListGroup>
                            {props ?
                                props.packed.map(function (item, i) {
                                    return (
                                        <ListGroupItem>{item.name}</ListGroupItem>
                                    )
                                })
                                :
                                <p>You've definitely underpacked.</p>
                            }

                            <Button href="#" onClick={handleClick}>Ready to Pack!</Button>
                        </ListGroup>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
};

