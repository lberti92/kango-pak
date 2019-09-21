import React from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_USER_TRIPS = gql`
  query getUserTrips($_id: String!) {
   user(_id: $id) {
      trips{
          name
      }
    }
  }
`;

const SavedTrips = props => {
    console.log(props.user)
    const { loading, error, data } = useQuery(GET_USER_TRIPS, {
        variables: {_id: props.user._id}
    });
    if (loading) console.log( 'Loading...')
     if (error) console.log(error.message)
     if (data) {
         console.log(data);
     }

    return(
        <>
        <h3>Packing List</h3>
        {/* get the props from the trip */}
        <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
        </ul>
        </>
    )
}

export default SavedTrips;