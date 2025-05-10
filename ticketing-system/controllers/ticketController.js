const Ticket = require('../models/ticketModel');

// GET /tickets → Fetch all tickets
const getTickets = (req, res) => {
  const tickets = Ticket.getTickets();
  res.status(200).json(tickets);
};

// GET /tickets/:id → Fetch a ticket by ID
const getTicketById = (req, res) => {
  const { id } = req.params;
  const ticket = Ticket.getTicketById(Number(id));

  if (ticket) {
    res.status(200).json(ticket);
  } else {
    res.status(404).json({ message: "Ticket not found" });
  }
};

// POST /tickets → Create a new ticket
const addTicket = (req, res) => {
  const { title, description, priority, user } = req.body;
  const newTicket = {
    id: Date.now(),
    title,
    description,
    priority,
    user,
    status: 'pending'
  };
  
  Ticket.addTicket(newTicket);
  res.status(201).json(newTicket);
};

// PUT /tickets/:id → Update a ticket
const updateTicket = (req, res) => {
  const { id } = req.params;
  const { title, description, priority } = req.body;

  const updatedTicket = Ticket.updateTicket(Number(id), { title, description, priority });

  if (updatedTicket) {
    res.status(200).json(updatedTicket);
  } else {
    res.status(404).json({ message: "Ticket not found" });
  }
};

// DELETE /tickets/:id → Delete a ticket
const deleteTicket = (req, res) => {
  const { id } = req.params;

  const isDeleted = Ticket.deleteTicket(Number(id));

  if (isDeleted) {
    res.status(200).json({ message: "Ticket deleted" });
  } else {
    res.status(404).json({ message: "Ticket not found" });
  }
};

// PATCH /tickets/:id/resolve → Resolve a ticket
const resolveTicket = (req, res) => {
  const { id } = req.params;
  const ticket = Ticket.getTicketById(Number(id));

  if (ticket) {
    ticket.status = 'resolved';
    Ticket.updateTicket(Number(id), { status: 'resolved' });
    res.status(200).json(ticket);
  } else {
    res.status(404).json({ message: "Ticket not found" });
  }
};

module.exports = {
  getTickets,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
  resolveTicket
};
