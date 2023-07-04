import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { Alert, Toast } from 'react-bootstrap';

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    try {
      const response = await fetch("http://localhost:5050/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.status === 404) {
        setShowAlertError(true);
        setTimeout(() => { navigate("/error")}, 5000);
      } else if (response.status === 204) {
        setForm({ email: "", password: "" });
        setShowAlertSuccess(true);
        setTimeout(() => { navigate("/recordList")}, 5000);
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      setShowAlertError(true);
      setTimeout(() => {window.alert(error.message);}, 5000); // Show the alert for 5 seconds
    }
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div style={{ textAlign: 'center', margin: '20px 250px', border: '3px solid #0D6EFD', padding: '20px' }}>
      <Form onSubmit={onSubmit}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
              />
            </Form.Group>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>

      {showAlertError && (
        <Alert variant="danger" onClose={() => setShowAlertError(false)} dismissible>
          Connexion échouée. Veuillez réessayer.
        </Alert>
      )}

      {showAlertSuccess && (
        <Alert variant="success" onClose={() => setShowAlertSuccess(false)} dismissible>
          Connexion acceptée.
        </Alert>
      )}
    </div>
  );
}
