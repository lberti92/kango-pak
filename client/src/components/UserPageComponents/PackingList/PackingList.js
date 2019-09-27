import React from "react";
import { Card, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_PACKINGLIST = gql`
  query getTrip($_id: String!) {
   trip(_id: $_id) {
         name
      }
    }
`;

const PackingList = props => {
    const { loading, error, data } = useQuery(GET_PACKINGLIST, {
        variables: { _id: props.tripId }
    });
    if (loading) console.log('Loading...')
    if (error) console.log(error.message)
    if (data) console.log(data);
    return (
        <>

            <Card bg="light">
                <Card.Header as="h4">Packing List</Card.Header>
                <Card.Body>
                <div className="scroll">
                    {props.tripId ? (
                        <ListGroup variant="flush">
                            {data ? (<p>{data.trip.location}  </p>) :
                                <>
                                    <h5>Don't have a list yet? We'll help you out with that.</h5>
                                    <Link to={`/packed/${props.tripId}`}>Let's get packing!</Link>
                                </>

                            }
                        </ListGroup>
                    ) : <p>Choose a trip to see your packing list!</p>}
                    </div>
                </Card.Body>
            </Card>

        </>

    )
}

export default PackingList