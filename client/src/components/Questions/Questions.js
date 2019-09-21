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
                    <Form.Control type="text" required placeholder="Location" onChange={e => setLocation(e.target.value)} value={location} />
                    <Form.Control type="text" required placeholder="Length of Stay (Days)" onChange={e => setLength(e.target.value)} value={length} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Describe the climate you be visiting (required):</Form.Label>
                    <Form.Control as="select" required onChange={e => setClimate(e.target.value)} value={climate}>
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
                        <option value="not sure" default>Not Quite Sure Yet</option>
                        <option value="hacker packer">Hacker Packer (You pride yourself on taking only the necessities.)</option>
                        <option value="holy roller">Holy Roller (You like your rolled bag with your rolled clothes.)</option>
                        <option value="what if">What-If? (What if there's a crazy storm? Or an impromptu celebrity dinner?)</option>
                        <option value="super souvenir">Super Souvenir (I need to bring things back for all the people (animals) in my life.)</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>What's your go-to bag for traveling (select below)?</Form.Label>
                    <Form.Control as="select" onChange={e => setLuggage(e.target.value)} value={luggage}>
                        <option value="not sure" default>Not Quite Sure Yet</option>
                        <option value="travel backpack">Travel Backpack</option>
                        <option value="wheeled carry-on">Wheeled Carry-On</option>
                        <option value="medium checked bag">Medium Checked Bag (24-25")</option>
                        <option value="large checked bag">Large Checked Bag (25-29")</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>What type of apparel do you prefer (select below)?</Form.Label>
                    <Form.Control as="select" onChange={e => setApparel(e.target.value)} value={apparel}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="gender neutral">Gender Neutral</option>
                    </Form.Control>
                </Form.Group>
                    <Button className="button">Get Packing!</Button>
            </Form>
        </Container>
    )
};
