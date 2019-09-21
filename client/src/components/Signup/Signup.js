import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import { string, object, bool} from "yup";
import API from "../../utils/API";

import gql from "graphql-tag";
import { userQuery, useMutation } from "@apollo/react-hooks";

const ADD_USER = gql`
 mutation addUser($username: String!, $password: String!, $name: String!) {
   username name
 }
`

const schema = object({
  name: string().required(),
  username: string().required(),
  password: string().required(),
  confirmPassword: string().required()
});

function Signup() {
  
    const handleSignup = values => {
        if (values.username && values.password) {
          API.signup({
            username: values.username,
            password: values.password,
            name: values.name
          }).then(user => {
            if (user.data.loggedIn) {
              console.log("log in successful");
              window.location.href = '/profile';
            } else {
              console.log("something went wrong :(")
              console.log(user.data);
            }
          });
        }
      }

  return (
    <Container className="container-fluid">
    
    <Formik
      validationSchema={schema}
      onSubmit={values => handleSignup(values)}
      initialValues={{
        name: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="signupBox">
          <Form.Row>
            <Form.Group controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Username"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group  controlId="validationFormik02">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                isValid={touched.username && !errors.username}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="validationFormik03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId="validationFormik04">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button className="signupBtn" type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
    </Container>
  );
}

export default Signup;