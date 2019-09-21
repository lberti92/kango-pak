import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./ClothingList.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function ClothingList(props) {

    const [Men, setMen] = useState();
    const [Women, setWomen] = useState();
    const [Neutral, setNeutral] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const GET_GREETING = gql`
        query getGreeting($language: String!) {
        greeting(language: $language) {
        message
    }
  }
`;

    function Hello() {
        const { loading, error, data } = useQuery(GET_GREETING, {
            variables: { language: 'english' },
        });
        if (loading) return <p>Loading ...</p>;
        return <h1>Hello {data.greeting.message}!</h1>;
    }

    return (
        <Container className="container-fluid">
            <Form onSubmit={handleSubmit}>
                <ListGroup>
                    <ListGroup.Item action variant="info">Men</ListGroup.Item>
                    <ListGroup.Item action variant="info">Women</ListGroup.Item>
                    <ListGroup.Item action variant="info">Neutral</ListGroup.Item>
                </ListGroup>
            </Form>
        </Container>
    )
};

