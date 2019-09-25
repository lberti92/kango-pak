import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Packed.scss";
import ClothingList from "../ClothingList/ClothingList";
import Questions from "../Questions/Questions";
import Card from "react-bootstrap/Card";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const GET_PACKINGLIST = gql`
    query getTrip($_id: String!) {
        trip(_id: $_id) {
            location
            length
            climate
            traveler
            luggage
            apparel
      } 
    }
`;

export default function Packed(props) {

    const { loading, error, data } = useQuery(GET_PACKINGLIST, {
        variables: { _id: props.tripId }
    });
    if (loading) console.log('Loading...')
    if (error) console.log(error.message)
    if (data) console.log(data);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Container className="container-fluid">
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Your trip to:</Card.Title>
                        {data ?
                            <>
                                <Card.Subtitle className="mb-2 text-muted">{data.trip.location}</Card.Subtitle>
                                <Card.Text>
                                    <p>Packing for: {data.trip.length}</p>
                                    <p>Climate: {data.trip.climate}</p>
                                    <p>Traveler: {data.trip.traveler}</p>
                                    <p>Luggage: {data.trip.luggage}</p>
                                    <p>Apparel: {data.trip.apparel}</p>
                                </Card.Text>
                            </>
                            : "loading..."}
                        <Card.Link href="#">Packed List</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <ClothingList>
                    <h2>Packing Items Recommendatons:</h2>
                </ClothingList>
            </div>
        </Container>
    )
};

