import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Packed.scss";


export default function Packed(props) {

    console.log(props);
    return (
        <>
            <Card id="packing-list-card">
                <Card.Body>
                    <Card.Title>Your Packing List for: {props.location} </Card.Title>
                    <Card.Text>
                        <ListGroup>
                            {props ?
                                props.packed.map(function (item, i) {
                                    return (
                                        <ListGroupItem>{item.name}</ListGroupItem>
                                    )
                                })
                                :
                                <p>You've definitely underpacked.</p>
                            }

                            <Button href="#">Ready to Pack!</Button>
                        </ListGroup>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
};

