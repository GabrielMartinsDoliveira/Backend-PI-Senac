const express = require('express');
const router = express.Router();
const { createCase, getCases,updateStatusCase, getCasesByDate, getCasesByStatus, getCasesByUser, getCaseById } = require('../controller/caseController');
const verifyToken = require('../middleware/verifyMiddleware');


// Rotas de caso
router.post('/', verifyToken, createCase);
router.get('/', verifyToken,getCases);
router.get('/:id',verifyToken, getCaseById)
router.get('/data',verifyToken, getCasesByDate);
router.get('/status',verifyToken, getCasesByStatus);
router.get('/responsavel',verifyToken, getCasesByUser);
router.put('/:id',verifyToken, updateStatusCase);

module.exports = router;