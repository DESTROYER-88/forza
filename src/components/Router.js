import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Animals from './Animals';
import Membership from './Membership';
import Tickets from './Tickets';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Confirmation from './Confirmation';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/confirmation" element={<Confirmation />} />
        {/* Optional: Add a catch-all route for 404 */}
        <Route path="*" element={<Home />} /> {/* Redirects unknown routes to Home */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
