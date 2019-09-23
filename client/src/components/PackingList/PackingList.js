import React from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_PACKINGLIST = gql`
  query getTrip($_id: String!) {
   trip(_id: $_id) {
         name
      }
    }
`;

const PackingList = props => {
    const { loading, error, data } = useQuery(GET_PACKINGLIST, {
        variables: {_id: props.tripId}
    });
    if (loading) console.log( 'Loading...')
     if (error) console.log(error.message)
     if (data) console.log(data);
    return(
        <>
        <h3>Packing List</h3>
        {/* get the props from the trip */}
        
        {data ? (
           <p>{data.trip.name}  </p>          ) : 
                
            ( <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>)
        }
        </>
        
        )
}

export default PackingList