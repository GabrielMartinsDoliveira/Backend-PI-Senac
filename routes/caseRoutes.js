const express = require('express');
const router = express.Router();
const { createCase, getCases,updateStatusCase } = require('../controllers/caseController');

// Rotas de caso
router.post('/', createCase);
router.get('/', getCases);
router.get('/', updateStatusCase);

module.exports = router;