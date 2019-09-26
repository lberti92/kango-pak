import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "../../../useForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_ITINERARY = gql`
  mutation AddItinerary($title: String!, $date: String!, $notes: String!, $tripId: String!) {
    addItinerary(title: $title, date: $date, notes: $notes,  tripId: $tripId) {
      title
      date
      notes
    }
  }
`;

const ItineraryForm = props => {
    const [values, handleChange] = useForm({title: "", notes: ""})
    const [startDate, setStartDate] = useState(new Date());

    const [addItinerary, { data }] = useMutation(ADD_ITINERARY);

    const handleSubmit = e => {
        e.preventDefault();
        addItinerary({ variables: { title: values.title, date: startDate, notes: values.notes, tripId: props.tripId }});
    }
    
    return (
        <>
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={values.title} onChange={handleChange} placeholder="New Itinerary Item" />
                </Form.Group>
                <Form.Group>
                <Form.Label>Date and Time</Form.Label>
                <div>
                    <DatePicker 
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        showTimeSelect
                        timeFormat="hh:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        placeholderText="Select a Date and Time"
                    />
                    </div>
                </Form.Group>
                <Form.Group controlId="notes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows="3" name="notes" value={values.notes} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={props.close}>
                    Save
            </Button>
            </Form>
        </>
    )

}

export default ItineraryForm;