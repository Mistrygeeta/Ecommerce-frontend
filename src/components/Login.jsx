import React, { useState } from 'react';
import { loginUser } from '../apis/AuthApis';
import { useForm } from 'react-hook-form';

const Login = ({setFlag}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {register, handleSubmit, formState: {error},}= useForm

  const onSubmit = async(data) => {
    try {
      let loggedinUser = await loginUser(data)
      console.log(loggedinUser)

    } catch (error) {
      console.log("error in login form", error)
      
    }
  
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ddd', borderRadius: 4 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter your username"
            style={{ width: '100%', padding: 8, marginTop: 4 }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{ width: '100%', padding: 8, marginTop: 4 }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: 10 }}>Submit</button>
      </form>
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <p>
          You don't have an account?{' '}
          <a href="/register" style={{ color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
