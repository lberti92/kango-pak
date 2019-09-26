import React, { useState, useEffect } from "react";
import { Button, Modal, Card, ListGroup } from "react-bootstrap";
import ItineraryItem from "../IteneraryItem";
import ItineraryForm from "../ItineraryForm";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_ITINERARY = gql`
  query Itinerary($tripId: String!) {
    itinerary(tripId: $tripId) {
         title
         date
         notes
      }
    }
`;

const Itinerary = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(props.tripId)

    const { loading, error, data } = useQuery(GET_ITINERARY, {
        variables: { tripId: props.tripId }
    });
    if (loading) console.log('Loading...')
    if (error) console.log(error.message)
    if (data) console.log(data);


    return (
        <>
            <Card bg="light">
                <Card.Header as="h4">Itinerary</Card.Header>
                <Card.Body className="scrool">
                    <div className="scroll">
                        {props.tripId ?
                            <ListGroup variant="flush">
                                {data ? (
                                    <ul>{data.itinerary.map(item => <ItineraryItem data={item} key={item._id} />)}</ul>
                                ) :
                                    <p>Add items to your trip itinerary to stay organized!</p>
                                }
                            </ListGroup> : <p>Choose a trip to see your itinerary and add more items!</p>}

                    </div>
                    <Button id="new-itinerary" variant="primary" onClick={handleShow}>Add to Itinerary</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add an Event</Modal.Title>
                </Modal.Header>
                <Modal.Body><ItineraryForm tripId={props.tripId} close={handleClose} /></Modal.Body>

            </Modal>
        </>

    )
}

export default Itinerary;