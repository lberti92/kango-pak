import React, {useContext, useState} from "react";
import {Row, Col, Button, Container} from "react-bootstrap";
import "./Profile.scss";
import SavedTrips from "../../components/UserPageComponents/SavedTrips";
import PackingList from "../../components/UserPageComponents/PackingList";
import Itinerary from "../../components/UserPageComponents/Itinerary";
import { Link } from "react-router-dom"
import UserProvider from "../../contexts/UserProvider";

const Profile = () => {
    const {loggedIn, user} = useContext(UserProvider.context);
    const [ tripId, setTripId ] = useState("");
    
    return (
        <>
            {loggedIn === true ? (
                <Container id="profile-wrapper">
                <Row>
                    <h1 className="greeting">Welcome {user.username}</h1>
                </Row>
                <Row>
                 <Col>
                    <SavedTrips user={user} tripID={tripId} setTripId={setTripId} />
                    </Col>
                    
                    {tripId ? (
                        <>
                    <Col><PackingList tripId={tripId} /></Col>
                    <Col><Itinerary tripId={tripId} /></Col>
                    </>) : 
                    null
                    }
                    
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