import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { FaUserSecret } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      const { token, customer } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', customer._id); // Store user ID in local storage
      navigate('/dashboard');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else if (err.request) {
        setError('No response from server');
      } else {
        setError('Error connecting to server');
      }
    }
  };

  return (
    <div className='titan'>
      <div className='wrap'>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className='inputbox'>
            <FaUserSecret className='icon'/>
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='inputbox'>
            <RiLockPasswordLine className='icon'/>
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className='rem'>
            <label><input type="checkbox"/>Remember</label>
            <a href='/register'>Forgot password</a>
          </div>
          <button type='submit'>Login</button>
          <div className='register'>
            <p>Don't have an account? <a href='/register'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
