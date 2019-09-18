import React, { useEffect, useState } from "react";
import { Form, InputGroup, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import { string, object, bool}from "yup";
import API from "../../utils/API";
import { useForm } from "../../useForm";
import { Link } from "react-router-dom";


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
            password: values.password
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
    <Formik
      validationSchema={schema}
      onSubmit={values => handleSignup(values)}
      initialValues={{
        name: 'Mark'
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
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
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
                placeholder="password"
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
                placeholder="password"
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
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;