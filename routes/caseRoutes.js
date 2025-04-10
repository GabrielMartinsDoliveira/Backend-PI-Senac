const express = require('express');
const router = express.Router();
const { createCase, getCases,updateStatusCase, getCasesByDate, getCasesByStatus, getCasesByUser, getCaseById } = require('../controller/caseController');


// Rotas de caso
router.post('/', createCase);
router.get('/', getCases);
router.get('/:id', getCaseById)
router.get('/data', getCasesByDate);
router.get('/status', getCasesByStatus);
router.get('/responsavel', getCasesByUser);
router.put('/:id', updateStatusCase);

module.exports = router;