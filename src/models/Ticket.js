// server/models/Ticket.js
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  ticketType: { type: String, required: true },
  price: { type: String, required: true },
  paymentData: { type: Object, required: true },
});

const TicketModel = mongoose.model('Ticket', TicketSchema);

module.exports = TicketModel;
