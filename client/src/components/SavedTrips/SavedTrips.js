import React, { useState } from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_USER_TRIPS = gql`
  query getUserTrips($_id: String!) {
   user(_id: $_id) {
      trips{
          name
          _id
      }
    }
  }
`;

const TripListItem = props => {
    return (
        <li onClick={props.handleClick}>{props.name}</li>
    )
}

const SavedTrips = ({user, setTripId}) => {
    let tripItems;

    const handleClick = tripId => {
        // alert("clicked")
        console.log(tripId)
        return setTripId(tripId)
    }
    
    const { loading, error, data } = useQuery(GET_USER_TRIPS, {
        variables: {_id: user._id}
    });
    if (loading) console.log( 'Loading...')
     if (error) console.log(error.message)
    if (data) {
        // tripItems = data.user.trips.map(trip => <TripListItem name={trip.name} onClick={handleClick(trip._id)} key={trip._id} />);
    }

    return(
        <>
        <h3>Your Saved Lists</h3>
        {/* get the props from the trip */}

        {data ? (
           <ul>{data.user.trips.map(trip => <TripListItem name={trip.name} handleClick={() => handleClick(trip._id)} key={trip._id} />)}</ul> 
        ) : (
            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
        ) }

        </>
    )
}

export default SavedTrips;