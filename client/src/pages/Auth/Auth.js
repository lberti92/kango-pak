import React, {useContext} from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import "./Auth.scss";
import UserProvider from "../../contexts/UserProvider";

const Auth = (props) => {
  const {loggedIn, user} = useContext(UserProvider.context);

    return (
      <div className="authBox">
        {(props.action === "login") ? (
          <Login loggedIn={loggedIn} />
        ) : (
            <Signup loggedIn={loggedIn} />
          )}
      </div>
    )
}

export default Auth;