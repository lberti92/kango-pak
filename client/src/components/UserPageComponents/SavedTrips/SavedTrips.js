import React, {useState, useEffect, useRef} from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { GoTrashcan } from "react-icons/go";
import { useMutation } from '@apollo/react-hooks';

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

const REMOVE_TRIP = gql`
    mutation RemoveTrip($_id: String!) {
        removeTrip(_id: $_id) {
            _id
        }
    }
`

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

      const [removeTrip, { data }] = useMutation(REMOVE_TRIP);
      const remove = _id => {
          removeTrip({ variables: {_id: _id }});
          props.refetch();
      }

    return (
        <ListGroup.Item onClick={props.handleClick} ref={node}>
            <h5>{props.location} <GoTrashcan onClick={() => remove(props._id)} /></h5>  { display ? <p>Your trip to {props.location} for {props.length} days.</p> : null }
        </ListGroup.Item>
    )
}

const SavedTrips = ({ user, setTripId, tripId }) => {

    const handleClick = _id => {
        return setTripId(_id)
    }
    const { loading, error, data, refetch } = useQuery(GET_USER_TRIPS, {
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
                                        refetch={refetch}
                                        location={trip.location} length={trip.length}
                                        handleClick={() => handleClick(trip._id)} />
                                        )
                                })
                         : 
                         <p>Planning a trip? Add it so we can start getting you organized!</p> 
                           }
                    </ListGroup>
                    </div>
                    <Button id="new-trip" href="/newtrip">New Trip</Button>
                </Card.Body>
                
            </Card>
        </>
    )
}

export default SavedTrips;