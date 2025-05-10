const fs = require('fs');
const path = './db.json';

// Read tickets from db.json
const getTickets = () => {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
};

// Write tickets to db.json
const saveTickets = (tickets) => {
  fs.writeFileSync(path, JSON.stringify(tickets, null, 2), 'utf-8');
};

// Get ticket by ID
const getTicketById = (id) => {
  const tickets = getTickets();
  return tickets.find(ticket => ticket.id === id);
};

// Add new ticket
const addTicket = (ticket) => {
  const tickets = getTickets();
  tickets.push(ticket);
  saveTickets(tickets);
  return ticket;
};

// Update ticket
const updateTicket = (id, updatedTicket) => {
  let tickets = getTickets();
  const index = tickets.findIndex(ticket => ticket.id === id);

  if (index !== -1) {
    tickets[index] = { ...tickets[index], ...updatedTicket };
    saveTickets(tickets);
    return tickets[index];
  }

  return null;
};

// Delete ticket
const deleteTicket = (id) => {
  let tickets = getTickets();
  const index = tickets.findIndex(ticket => ticket.id === id);

  if (index !== -1) {
    tickets.splice(index, 1);
    saveTickets(tickets);
    return true;
  }

  return false;
};

module.exports = {
  getTickets,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket
};
