import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
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


    return (
        <>    
                    <Card>
                        <Card.Body>
                            <Card.Title>Your Packing List for: {props.location} </Card.Title>
                            <Card.Text>
                                {props.packed}
                            </Card.Text>
                            <Card.Link href="#">Ready to Pack!</Card.Link>
                        </Card.Body>
                    </Card>
        
            
          </>
    )
};

