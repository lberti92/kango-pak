import { Container, Carousel, Button, Image, Col, Row} from "react-bootstrap"
import React, { useState } from "react";
import "./Home.scss";

function Home() {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    }

    return (
        <Container>
            <Row>
                <Col lg="12">
                    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                        <Carousel.Item className="carousel">
                            <Image
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                alt="First slide"
                                fluid
                                rounded

                            />
                            <Carousel.Caption>
                                <h3 className="label">Welcome to KanGoPak</h3>
                                <p className="label-text-dark">A new way to prepare for all the places you want to go</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1465865523598-a834aac5d3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                alt="Second slide"
                                fluid
                                rounded
                            />

                            <Carousel.Caption>
                                <h3 className="label">Packing Assistant</h3>
                                <p className="label-text-dark">Create a personalized packing list and refer to past trips to make travel a breeze</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                alt="Third slide"
                                fluid
                                rounded
                            />

                            <Carousel.Caption>
                                <h3 className="label">Organized Chaos</h3>
                                <p className="label-text-dark">One place for all your travel needs</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="change-height">
                <Col> 
                <Button href="/signup" id="link-btn"> Sign-Up </Button> 
                </Col>
            </Row>
        </Container>


    );
}


export default Home;
