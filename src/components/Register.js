import React, { useState } from 'react';
import { FaUserSecret } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import '../css/Login.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        // Clear form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');
      } else {
        setErrorMessage(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='titan'>
      <div className='wrap'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className='inputbox'>
            <FaUserSecret className='icon'/>
            <input type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='inputbox'>
            <FaUserSecret className='icon'/>
            <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='inputbox'>
            <RiLockPasswordLine className='icon' />
            <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='inputbox'>
            <RiLockPasswordLine className='icon' />
            <input type="password" placeholder='Confirm Password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type='submit'>Register</button>
          <div className='register'>
            <p>Already have an account? <a href='Login'>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
