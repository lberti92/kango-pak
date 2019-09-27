import React from "react";
import { Card, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_PACKINGLIST = gql`
  query getPackingList($tripId: String!) {
   packing(tripId: $tripId) {
         items
      }
    }
`;

let packingList = [];

const PackingList = props => {
    const { loading, error, data } = useQuery(GET_PACKINGLIST, {
        variables: { tripId: props.tripId }
    });
    if (loading) console.log('Loading...')
    if (error) console.log(error.message)
    if (data) {
        if (data.packing[0]) {
            packingList = data.packing[data.packing.length - 1].items.split(", ");
        }
    };

    return (
        <>

            <Card bg="light">
                <Card.Header as="h4">Packing List</Card.Header>
                <Card.Body>
                    <div className="scroll">
                        {packingList.length > 1  ? (
                            <>
                                <ListGroup variant="flush">
                                   { packingList.map(item => <ListGroup.Item>{item}</ListGroup.Item>)}
                                </ListGroup>
                            </>
                        ) : (
                            <>
                                    <p>Don't have a list yet? We'll help you out with that.</p>
                                    <Link to={props.tripId ? `/packed/${props.tripId}` : "/newtrip"}>Let's get packing!</Link>
                                </>
                            )
                        }
                    </div>
                </Card.Body>
            </Card>

        </>

    )
}

export default PackingList