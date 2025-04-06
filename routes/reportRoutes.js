const express = require('express');
const router = express.Router();
const { createReport, getReports, getReportsByDate, getReportsByStatus, getReportsByUser } = require('../controllers/reportController');


// Rotas de laudo
router.post('/', createReport);
router.get('/', getReports);
router.get('/data', getReportsByDate);
router.get('/status', getReportsByStatus);
router.get('/responsavel', getReportsByUser);

module.exports = router;