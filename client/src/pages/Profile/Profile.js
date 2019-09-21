import React, {useContext, useEffect} from "react";
import "./Profile.scss";
import {Row, Col} from "react-bootstrap";
import SavedTripList from "../../components/SavedTripList";
import SavedTrip from "../../components/SavedTrips";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import UserProvider from "../../contexts/UserProvider";
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

const Profile = () => {
    const {loggedIn, user} = useContext(UserProvider.context);

    useEffect(() => {
        const { loading, error, data } = useQuery(GET_USER_TRIPS, {
            variables: {_id: user._id}
        });
        if (loading) console.log( 'Loading...')
         if (error) console.log(error.message)
         if (data) {
             console.log(data);
         }
    
    }, [loggedIn])

    
    return (
        <>
            {loggedIn === true ? (
                <>
                <Row>
                    <h1>Welcome {user.username}</h1>
                </Row>
                <Row>
                    <Col>
                    <SavedTrip />
                    </Col>
                    <Col>
                    <SavedTripList />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </>
            ) : (
                <div className="noUser">
                    {user ? (
                        <>
                            <h1>Please log in</h1>
                            <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                        </>
                    ) : (
                        <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                    )}
                </div> 
            )}
        </>
    )
}

export default Profile;