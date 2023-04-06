import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  BDiv,
  BH4,
  BHr,
} from "bootstrap-4-react";
import { useState } from "react";

const style = {
  minWidth: "100vw",
  minHeight: "100vh",
  container: {
    maxWidth: "960px",
  },
  lhCondensed: {
    lineHeight: "1.25",
  },
};

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    trustValue: false,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleChangeCheckbox = () => {
    setValues((prev) => ({ ...values, trustValue: !prev.trustValue }));
  };

  console.log(values);

  return (
    <BDiv bg="light" style={style}>
      <Container style={style.container}>
        <Row>
          <Col md="8" order="md-1">
            <Form needsValidation noValidate>
              <BH4 mb="3">Log in</BH4>
              <BDiv mb="3">
                <label htmlFor="email">Email</label>
                <Form.Input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  onChange={handleChange}
                  name="email"
                />
                <Form.Feedback invalid>
                  Please enter a valid email address.
                </Form.Feedback>
              </BDiv>
              <BDiv mb="3">
                <label htmlFor="password">Password</label>
                <Form.Input
                  type="password"
                  id="password"
                  onChange={handleChange}
                  name="password"
                />
                <Form.Feedback invalid>
                  Please enter your password.
                </Form.Feedback>
              </BDiv>
              <BHr mb="4" />
              <Form.Check>
                <Form.CheckInput
                  type="checkbox"
                  id="trustDevice"
                  onChange={handleChangeCheckbox}
                  name="trustDevice"
                />
                <label htmlFor="trustDevice">Trust device</label>
              </Form.Check>
              <Button primary lg block type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </BDiv>
  );
};

export default Login;
