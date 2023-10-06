import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'; // Import Bootstrap components
import facebook from '../image/facebook.jpg';
import google from '../image/google.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Form onSubmit={handleLogin}>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </FormGroup>
      <div>
        <a href="/forgot-password">Forgot Password</a>
      </div>
      <FormGroup>
        <Button type="submit" color="primary">Login</Button>
      </FormGroup>
      <div className="login-options">
        <p>Login using:</p>
        <div>
          <a href="..">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="..">
            <img src={google} alt="Google" />
          </a>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
