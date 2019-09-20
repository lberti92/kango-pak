import React, {useContext} from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import UserProvider from "../../contexts/UserProvider";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const GET_USERS = gql`
{
  users {
    username
  }
}
`

const Profile = () => {
    const {loggedIn, user} = useContext(UserProvider.context);
    
    const { loading, error, data } = useQuery(GET_USERS);
    if (loading) console.log( 'Loading...')
     if (error) console.log(error.message)
     if (data) {
         console.log(data);
     }
    
    return (
        <div className="profilePage">
            {loggedIn === true ? (
                <div className="profileBox">
                    <h1 id="userTitle">Welcome {user.username}</h1>
                </div>
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
        </div>
    )
}

export default Profile;