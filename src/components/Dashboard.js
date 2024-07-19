import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get(`http://localhost:3001/user/${userId}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setError('Failed to fetch user data.');
        });

      axios.get(`http://localhost:3001/tickets/${userId}`)
        .then(response => {
          setTickets(response.data);
        })
        .catch(error => {
          console.error('Error fetching tickets:', error);
          setError('Failed to fetch tickets.');
        });
    } else {
      setError('User ID not found in local storage.');
    }
  }, []);

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <h3>Your Tickets</h3>
      {tickets.length > 0 ? (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket._id}>
              <p>Ticket Type: {ticket.ticketType}</p>
              <p>Purchase Date: {new Date(ticket.purchaseDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No tickets found.</p>
          <Link to="/ticket-selection">Book Tickets</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
