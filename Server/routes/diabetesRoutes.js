const express = require('express');
const router = express.Router();
const { getClients, createClient } = require('../controllers/diabetesController');

// GET /api/clients?search=&status=&page=&limit=
router.get('/diabetes', getClients);
// router.get('/clients/count', diabetesController.getClientsCount); // new count route


// POST /api/clients
router.post('/diabetes', createClient);

module.exports = router;
