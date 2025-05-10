const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const dataCheckMiddleware = require('../middlewares/dataCheckMiddleware');

// GET /tickets → Fetch all tickets
router.get('/tickets', ticketController.getTickets);

// GET /tickets/:id → Fetch ticket by ID
router.get('/tickets/:id', ticketController.getTicketById);

// POST /tickets → Create a new ticket with validation
router.post('/tickets', dataCheckMiddleware, ticketController.addTicket);

// PUT /tickets/:id → Update ticket
router.put('/tickets/:id', ticketController.updateTicket);

// DELETE /tickets/:id → Delete ticket
router.delete('/tickets/:id', ticketController.deleteTicket);

// PATCH /tickets/:id/resolve → Resolve a ticket
router.patch('/tickets/:id/resolve', ticketController.resolveTicket);

module.exports = router;
