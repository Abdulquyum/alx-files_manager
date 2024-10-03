const express = require('express');
const AppController = require('./controllers/AppController');

const router = express.Router();

// Route for GET /status => AppController.getStatus
router.get('/status', AppController.getStatus);

// Route for GET /stats => AppController.getStats
router.get('/stats', AppController.getStats);

module.exports = router;
