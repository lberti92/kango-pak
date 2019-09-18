import React, {useState, useContext} from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API"
import UserProvider from "../../contexts/UserProvider";

const Profile = () => {
    const {loggedIn, user} = useContext(UserProvider.context);
    console.log(user);
    
    return (
        <div className="profilePage">
            {loggedIn ? (
                <div className="profileBox">
                    <h1 id="userTitle">Welcome {user.username}</h1>
                </div>
            ) : (
                <div className="noUser">
                    {user ? (
                        <>
                            <h1>please log in</h1>
                            <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                        </>
                    ) : (
                        <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                    )}
                </div> 
            )}
        </div>
    )
}

export default Profile;