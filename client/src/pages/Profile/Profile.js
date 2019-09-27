import React, {useContext, useState} from "react";
import {Row, Col, Container} from "react-bootstrap";
import "./Profile.scss";
import SavedTrips from "../../components/UserPageComponents/SavedTrips";
import PackingList from "../../components/UserPageComponents/PackingList";
import Itinerary from "../../components/UserPageComponents/Itinerary";
import Login from "../../components/Login";
import UserProvider from "../../contexts/UserProvider";

const Profile = () => {
    const {loggedIn, user} = useContext(UserProvider.context);
    const [ tripId, setTripId ] = useState("");
    

    console.log(tripId)
    return (
        <>
            {loggedIn ? (
                <Container id="profile-wrapper">
                <Row>
                    <div>
                    <h1 className="greeting">Welcome, {user.username}</h1>
                    </div>
                </Row>
                <Row>
                 <Col>
                    <SavedTrips user={user} tripID={tripId} setTripId={setTripId} />
                    </Col>
                    <Col><PackingList  tripId={tripId} /></Col>
                    <Col><Itinerary tripId={tripId}  /></Col>
                </Row>
                </Container>
            ) : (
                <div className="authBox">
                <Login />
                </div>
            )}
        </>
    )
}

export default Profile;