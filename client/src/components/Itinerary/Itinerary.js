import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import ItineraryItem from "../IteneraryItem";
import ItineraryForm from "../ItineraryForm";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_ITINERARY = gql`
  query getItinerary($tripId: String!) {
   trip(_id: $tripId) {
    itinerary {
        title
        date
        notes
      }
      }
    }
`;

const Itinerary = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const { loading, error, data } = useQuery(GET_ITINERARY, {
        variables: { tripId: props.tripId }
    });
    if (loading) console.log('Loading...')
    if (error) console.log(error.message)
    if (data) console.log(data);


    return (
        <>
            <h3>Itinerary</h3>
            {/* get the props from the trip */}

            {data ? (
                <ul>{data.trip.itinerary.map(item => <ItineraryItem _id={item._id} key={item._id} title={item.title} date={item.date} notes={item.notes}/>)}</ul>
            ) :

                <h4>Add Items To Your Itinerary</h4>
            }

            <Button variant="primary" onClick={handleShow}>
                Add to Itinerary
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><ItineraryForm tripId={props.tripId} close={handleClose} /></Modal.Body>

            </Modal>
        </>

    )
}

export default Itinerary;