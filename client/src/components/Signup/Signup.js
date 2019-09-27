import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import API from "../../utils/API";

const schema =  yup.object({
  name: yup
  .string()
  .required("Please enter your name."),
  username: yup
  .string()
  .required(),
  password: yup 
  .string()
  .required("Please enter a password.")
  .matches(
    /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
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