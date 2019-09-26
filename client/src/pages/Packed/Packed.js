import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Packed.scss";
import Recommendation from "../../components/Recommendation/Recommendation";
import ClothingList from "../../components/ClothingList/ClothingList";
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
   }`

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
        <Container className="container-packing">
            <Row>
                <Col>
                <Recommendation />  
                </Col>
                <Col>
                {data ? 
                <ClothingList apparel={data.trip.apparel} climate={data.trip.climate} />
                : "loading..."
            }       
                </Col>
                {data ? 
                <>
                <Col className="suitcase">
                    <Card>
                        <Card.Body>
                            <Card.Title>Your Packing List for: {data.trip.location} </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Ready to Pack!</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                </>
                : "loading..."}
            </Row>
        </Container>
    )
};

