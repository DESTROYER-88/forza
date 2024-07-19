// src/components/Confirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { ticket, qrCodeData } = location.state;

  return (
    <div className="confirmation">
      <h2>Payment Successful</h2>
      <p>Ticket ID: {ticket._id}</p>
      <img src={qrCodeData} alt="QR Code" />
    </div>
  );
};

export default Confirmation;
