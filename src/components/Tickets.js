import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Tickets = () => {
  const [ticketType, setTicketType] = useState('adult');
  const navigate = useNavigate();

  const handleTicketChange = (event) => {
    setTicketType(event.target.value);
  };

  const handlePayment = async () => {
    const price = ticketType === 'adult' ? '4000' : '1000'; // Price in paise for Razorpay

    try {
      const orderResponse = await axios.post('http://localhost:3001/create-order', {
        amount: price,
        currency: 'INR',
        receipt: `receipt_${Math.random()}`,
        notes: { ticketType },
      });

      const { id } = orderResponse.data;

      const options = {
        key: 'your_razorpay_key_id', // Replace with your actual Razorpay key
        amount: price,
        currency: 'INR',
        name: 'Zoo Ticket Booking',
        description: `Booking for ${ticketType}`,
        order_id: id,
        handler: async function (response) {
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const ticketResponse = await axios.post('http://localhost:3001/generate-ticket', {
              paymentData,
              ticketType,
              price: ticketType === 'adult' ? '40.00' : '10.00', // Actual ticket price
            });

            const { ticket, qrCodeData } = ticketResponse.data;
            alert(`Ticket generated: ${ticket._id}`);
            navigate('/confirmation', { state: { ticket, qrCodeData } });
          } catch (error) {
            console.error('Error generating ticket:', error);
            alert('Ticket generation failed. Please try again.');
          }
        },
        prefill: {
          email: 'user@example.com', // Pre-filled email
          contact: '9999999999', // Pre-filled contact number
        },
        theme: {
          color: '#3399cc', // Razorpay checkout theme color
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      alert('Payment initiation failed. Please try again.');
    }
  };

  return (
    <div className="ticket-selection">
      <h2>Select Ticket Type</h2>
      <label>
        Ticket Type:
        <select value={ticketType} onChange={handleTicketChange}>
          <option value="adult">Adult</option>
          <option value="child">Child</option>
        </select>
      </label>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default Tickets;
