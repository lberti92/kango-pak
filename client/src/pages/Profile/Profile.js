import React, {useContext, useEffect, useState, createContext} from "react";
import {Row, Col, Button, Container} from "react-bootstrap";
import "./Profile.scss";
import SavedTripList from "../../components/SavedTripList";
import SavedTrip from "../../components/SavedTrips";
import { Link } from "react-router-dom"
import UserProvider from "../../contexts/UserProvider";

const Profile = () => {
    const {loggedIn, user} = useContext(UserProvider.context);
    const [ tripId, setTripId ] = useState("");

    useEffect(() => {
        console.log(tripId)
    }, [tripId])
    
    return (
        <>
            {loggedIn === true ? (
                <Container id="profile-wrapper">
                <Row>
                    <h1 className="greeting">Welcome {user.username}</h1>
                </Row>
                <Row>

                    <Col>
                    <SavedTrip user={user} tripID={tripId} setTripId={setTripId} />
                    </Col>
                    <Col>
                    <SavedTripList tripId={tripId} />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                </Container>
            ) : (
                <div className="noUser">
                    {user ? (
                        <>
                            <h1>Please Log In</h1>
                            <Link className="loginLink" to="/login">
                                <Button className="loginBtn" color="info" >Login</Button>
                            </Link>
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