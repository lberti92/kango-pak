import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Packed.scss";
import Card from "react-bootstrap/Card";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


export default function Packed(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //     const GET_GREETING = gql`
    //         query getGreeting($language: String!) {
    //         greeting(language: $language) {
    //         message
    //     }
    //   }
    // `;

    //     function Hello() {
    //         const { loading, error, data } = useQuery(GET_GREETING, {
    //             variables: { language: 'english' },
    //         });
    //         if (loading) return <p>Loading ...</p>;
    //         return <h1>Hello {data.greeting.message}!</h1>;
    //     }

    return (
        <Container className="container-fluid">
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
        </Container>
    )
};

