import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./ClothingList.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


// const getMens = gql`
// query Men {
//     mens {
//         name
//         weight
//    }
// }
// `;

const getMens = gql`
query Cold {
    cold {
        mens {
            name
            weight
        }
   }
}
`;

const ClothingList = props => {

let mensItems;
const { loading, error, data } = useQuery(getMens);
if (loading) console.log('Loading...')
if (error) console.log(error.message)
if (data) {
    // mensItems = data.cold.mens.map(Men => <li>{data.cold.mens.props}</li>);
    console.log(data.cold.mens[0]);
}

    return (
        <>
            <Container className="container-fluid">
                <Form>
                    <ListGroup>
                        <ListGroup.Item action variant="info">Men</ListGroup.Item>
                        <ListGroup.Item action variant="info">Women</ListGroup.Item>
                        <ListGroup.Item action variant="info">Neutral</ListGroup.Item>
                    </ListGroup>
                </Form>
            </Container>
        </>
    );
}


export default ClothingList;
