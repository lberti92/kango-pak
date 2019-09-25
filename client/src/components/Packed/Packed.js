import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Packed.scss";
import ClothingList from "../ClothingList/ClothingList";
import Questions from "../Questions/Questions";
import Card from "react-bootstrap/Card";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


export default function Packed(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Container className="container-fluid">
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>My trip</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Antarctica</Card.Subtitle>
                    <Card.Text>
                        Notes on Antarctica Trip
                    </Card.Text>
                    <Card.Link href="#">Packed List</Card.Link>
                </Card.Body>
            </Card>
            </div>
            <div>
            <ClothingList>
                <h2>Packing Rex:</h2>
            </ClothingList>
            </div>
        </Container>
    )
};

