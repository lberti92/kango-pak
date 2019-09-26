import React, {useState, useEffect, useRef} from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_USER_TRIPS = gql`
  query getUserTrips($_id: String!) {
   user(_id: $_id) {
      trips{
          _id
          location
          length
          climate
          itinerary{
              title
          }
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
            <h5>{props.location}</h5> { display ? <p>Your trip at {props.location}, for {props.length}.</p> : null }
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
            <Card bg="light">
                <Card.Header as="h4">Saved Trips</Card.Header>
                <Card.Body>
                    <div className="scroll">
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
                    </div>
                    <Button id="new-trip" href="/newtrip">New Trip</Button>
                </Card.Body>
                
            </Card>
        </>
    )
}

export default SavedTrips;