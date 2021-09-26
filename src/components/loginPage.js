import React from "react";
import { Form, Button } from "react-bootstrap";

const styles = {
  formContainer: {
    backgroundColor: "#2d3142",
    padding: "25px",
    width: "50%",
    borderRadius: "1.5vh",
    boxShadow: "2px 6px 12px 0px rgba(0,0,0,0.75)",
  },

  formItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const LoginForm = () => {
  return (
    <div style={styles.formContainer}>
      <div style={styles.formItems}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
