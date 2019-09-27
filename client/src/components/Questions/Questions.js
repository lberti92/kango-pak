import React, { useContext, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "../../useForm";
import "./Questions.scss";
import gql from 'graphql-tag';
import { useMutation } from "@apollo/react-hooks";
import UserProvider from "../../contexts/UserProvider";


const ADD_TRIP = gql `
mutation AddTrip($userId: String!, $location: String!, $length: String!, $climate: String!, $traveler: String!, $luggage: String!, $apparel: String!){
    addTrip(userId: $userId, location: $location, length: $length, climate: $climate, traveler: $traveler, luggage: $luggage, apparel: $apparel) {
        _id
        location
        length
        climate
        traveler
        luggage
        apparel
    }
}`

export default function Questions(props) {
    const {user} = useContext(UserProvider.context);

    const [values, handleChange] = useForm({location: "", length: "", climate: "", luggage: "", traveler: "", apparel: ""})

    const [addTrip, { data }] = useMutation(ADD_TRIP);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addTrip({ variables: { userId: user._id, location: values.location, length: values.length, climate: values.climate, traveler: values.traveler, luggage: values.luggage, apparel: values.apparel }});
        if (data) { 
        console.log(data)
        ;
        return window.location=`/packed/${data.addTrip._id}`
        }
    }

    useEffect(() => {
        if (data) {
            return window.location=`/packed/${data.addTrip._id}`
        }
    })

    return (
            <Container className="container-fluid">
            <Form onSubmit={handleSubmit}>
                <h1 className="form-header">Tell us about your trip:</h1>
                <Form.Group>
                    <Form.Control type="text" name="location" required placeholder="Location" onChange={handleChange} value={values.location} />
                    <Form.Control type="text" name="length" required placeholder="Length of Stay (Days)" onChange={handleChange} value={values.length} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Describe the climate you will be visiting (required):</Form.Label>
                    <Form.Control as="select" name="climate" required onChange={handleChange} value={values.climate}>
                        <option value="cold">Cold</option>
                        <option value="warm">Warm</option>
                        <option value="seasonal">Seasonal</option>
                        <option value="desert">Desert</option>
                        <option value="tropical">Tropical</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>What type of traveler are you (select below)?</Form.Label>
                    <Form.Control as="select" name="traveler" onChange={handleChange} value={values.traveler}>
                        <option value="not sure" default>Not Quite Sure Yet</option>
                        <option value="hacker packer">Hacker Packer (You pride yourself on taking only the necessities.)</option>
                        <option value="holy roller">Holy Roller (You like your rolled bag with your rolled clothes.)</option>
                        <option value="what if">What-If? (What if there's a crazy storm? Or an impromptu celebrity dinner?)</option>
                        <option value="super souvenir">Super Souvenir (I need to bring things back for all the people (animals) in my life.)</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>What's your go-to bag for traveling (select below)?</Form.Label>
                    <Form.Control as="select" name="luggage" onChange={handleChange} value={values.luggage}>
                        <option value="not sure" default>Not Quite Sure Yet</option>
                        <option value="travel backpack">Travel Backpack</option>
                        <option value="wheeled carry-on">Wheeled Carry-On</option>
                        <option value="medium checked bag">Medium Checked Bag (24-25")</option>
                        <option value="large checked bag">Large Checked Bag (25-29")</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>What type of apparel do you prefer (select below)?</Form.Label>
                    <Form.Control as="select" name="apparel" onChange={handleChange} value={values.apparel}>
                        <option value="men">Male</option>
                        <option value="women">Female</option>
                        <option value="neutral">Gender Neutral</option>
                    </Form.Control>
                </Form.Group>
                    <Button type="submit">Get Packing!</Button>
            </Form>
        </Container>
    )
};
