import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Questions.scss";

export default function Questions(props) {

    const [location, setLocation] = useState("");
    const [length, setLength] = useState("");
    const [climate, setClimate] = useState("");
    const [traveler, setTraveler] = useState("");
    const [luggage, setLuggage] = useState("");
    const [apparel, setApparel] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <Container className="container-fluid">
            <Form onSubmit={handleSubmit}>
                <h1 className="form-header">Tell us about your trip:</h1>
                <Form.Group>
                    <Form.Control type="text" placeholder="Location" onChange={e => setLocation(e.target.value)} value={location} />
                    <Form.Control type="text" placeholder="Length of Stay (Days)" onChange={e => setLength(e.target.value)} value={length} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Describe the climate will you be visiting (select below):</Form.Label>
                    <Form.Control as="select" onChange={e => setClimate(e.target.value)} value={climate}>
                        <option value="cold">Cold</option>
                        <option value="warm">Warm</option>
                        <option value="seasonal">Seasonal</option>
                        <option value="desert">Desert</option>
                        <option value="tropical">Tropical</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>What type of traveler are you (select below)?</Form.Label>
                    <Form.Control as="select" onChange={e => setTraveler(e.target.value)} value={traveler}>
                        <option value="hacker packer">Hacker Packer</option>
                        <option value="holy roller">Holy Roller</option>
                        <option value="what-if">What-If?</option>
                        <option value="super souvenir">Super Souvenir</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>How much luggage will you be bringing (select below)?</Form.Label>
                    <Form.Control as="select" onChange={e => setLuggage(e.target.value)} value={luggage}>
                        <option value="travel backpack">Travel Backpack</option>
                        <option value="wheeled carry-on">Wheeled Carry-On</option>
                        <option value="medium checked bag">Medium Checked Bag (24-25")</option>
                        <option value="large checked bag">Large Checked Bag (25-29")</option>
                    </Form.Control>
                </Form.Group>

                    <Form.Group>
                        <Form.Label>What type of apparel do you prefer to bring (select below)?</Form.Label>
                        <Form.Control as="select" onChange={e => setApparel(e.target.value)} value={apparel}>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="neutral">Neutral</option>
                        </Form.Control>
                    </Form.Group>
                    <Button className="button">Get Packing!</Button>
            </Form>
        </Container>
        )
    };
