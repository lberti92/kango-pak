import React, {useContext} from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link } from "react-router-dom";
import UserProvider from "../../contexts/UserProvider";
import { useForm } from "../../useForm";

function Login(props) {
    const {loggedIn, user} = useContext(UserProvider.context);
    const [values, handleChange] = useForm({ username: "", password: "" });

    return (
        <div className="loginBox">
            <h2 className="loginTitle title-font">Login</h2>
            <hr/>
            {props.message ? (
                <Alert className="animated fadeIn" color="danger">{props.message}</Alert>
            ) : (<></>)}
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="username" value={values.username} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" value={values.password} onChange={handleChange} />
                </FormGroup>
                <Button id="loginBtn" onClick={props.handleLogin} block>Login</Button>
                <p className="signupLink">
                    <Link to="/signup">dont have an account?  Sign up here</Link>
                </p>
            </Form>
        </div>
    );
}

export default Login;