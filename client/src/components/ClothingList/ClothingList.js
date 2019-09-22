import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./ClothingList.scss";
import ListGroup from "react-bootstrap/ListGroup";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const getMens = gql`
query Cold {
    mens {
        name
        weight
   }
}
`;

const ClothingList = props => {

let mensItems;
const { loading, error, data } = useQuery(getMens);
if (loading) console.log('Loading...')
if (error) console.log(error.message)
if (data) {
    // mensItems = data.user.men.map(Men => <li>{Men.name}</li>);
    console.log(data);
}

return (
    <h1>FUCK YOU APOLLO!!!</h1>
)


//     const initialState = { default: false };

//     function reducer(state, action) {
//         switch (action.type) {
//             case "men":
//                 return { Men };
//             case "women":
//                 return { Women };
//             case "neutral":
//                 return { Neutral };
//             default:
//                 throw new Error();
//         }
//     }


    function clothingList() {
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
}

export default ClothingList;
