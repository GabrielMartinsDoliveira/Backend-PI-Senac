const express = require('express');
const router = express.Router();
const { createReport, getReports, getReportById, updateReport, deleteReport, } = require('../controller/reportController');


// Rotas de laudo
router.post('/', createReport);
router.get('/', getReports);
router.get('/:id', getReportById);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

module.exports = router;