import React from "react";
import { GoTrashcan } from "react-icons/go";
import Moment from 'react-moment';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const REMOVE_ITINERARY = gql`
    mutation RemoveItinerary($_id: String!) {
        removeItinerary(_id: $_id) {
            _id
        }
    }
`

const ItineraryItem = props => {
  const [removeItinerary, { data }] = useMutation(REMOVE_ITINERARY);
    const remove = _id => {
        removeItinerary({ variables: {_id: _id }});
        console.log(data)
        props.refetch();
    }

    return (
        <li>
            <p className="title">{props.data.title} <GoTrashcan onClick={() => remove(props.data._id)} /> </p>
            <p className="date"><Moment date={props.data.date} format="LLLL" /></p>
            <p>{props.data.notes}</p>
        </li>
    )
}

export default ItineraryItem;