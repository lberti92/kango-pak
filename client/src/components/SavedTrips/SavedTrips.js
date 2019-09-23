import React, {useState, useEffect, useRef} from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_USER_TRIPS = gql`
  query getUserTrips($_id: String!) {
   user(_id: $_id) {
      trips{
          name
          _id
          location
          length
          climate
      }
    }
  }
`;

const TripListItem = props => {
    const node = useRef();
    const [display, setDisplay] = useState(false)

    const handleClick = e => {
        if (node.current.contains(e.target)) {
          // inside click
          return setDisplay(display => !display);
        }
        // outside click 
        // setDisplay(false)
      };

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);

    return (
        <ListGroup.Item onClick={props.handleClick} ref={node}>
            <h5>{props.name}</h5> { display ? <p>Your trip at {props.location}, for {props.length}.</p> : null }
        </ListGroup.Item>
    )
}

const SavedTrips = ({ user, setTripId, tripId }) => {
    const handleClick = _id => {
        return setTripId(_id)
    }
    const { loading, error, data } = useQuery(GET_USER_TRIPS, {
        variables: { _id: user._id }
    });
    if (loading) console.log('Loading...')
    if (error) console.log(error.message)
    if (data) {
        console.log(data)
    }

    return (
        <>
            <Card>
                <Card.Header as="h4">Saved Trips</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <ListGroup variant="flush">
                        {data ? 
                             data.user.trips.map(function(trip) {
                                    return (<TripListItem
                                        tripId={tripId}
                                        name={trip.name} _id={trip._id}
                                        location={trip.location} length={trip.length}
                                        handleClick={() => handleClick(trip._id)} />
                                        )
                                })
                         : (
                                <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading" />
                            )}
                    </ListGroup>
                    <Button variant="primary">New Trip</Button>
                </Card.Body>
            </Card>
            {/* <h3 className="lead-titles">Saved Trips</h3> */}
            {/* get the props from the trip */}
        </>
    )
}

export default SavedTrips;