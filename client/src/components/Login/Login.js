import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link } from "react-router-dom";
import { useForm } from "../../useForm";
import API from "../../utils/API";

const Login = () => {
    const [values, handleChange] = useForm({ username: "", password: "" });
    const [message, setMessage] = useState("")

    const handleLogin = event => {
        event.preventDefault();
        if (values.username && values.password) {
          API.login({
            username: values.username,
            password: values.password
          }).then(userData => {
            console.log(userData.user);
            if (userData.data.loggedIn) {
              window.location.href = '/profile';
            }
            else if (userData.data.message) {
              setMessage(userData.data.message)
            }
          });
        }
      }

    return (
        <div className="loginBox">
            <h2 className="loginTitle title-font">Login</h2>
            <hr/>
            {message ? (
                <Alert className="animated fadeIn" color="danger">{message}</Alert>
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
                <Button id="loginBtn"  onClick={handleLogin} block>Login</Button>
                <p className="signupLink">
                    <Link to="/signup">dont have an account?  Sign up here</Link>
                </p>
            </Form>
        </div>
    );
}

export default Login;