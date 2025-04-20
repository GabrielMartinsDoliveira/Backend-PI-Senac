const express = require('express');
const { createEvidence, getEvidences, getEvidenceById, updateEvidence } = require('../controller/evidenceController');
const verifyToken = require('../middleware/verifyMiddleware');
const router = express.Router();


// Rotas de evidencia

router.post('/', verifyToken, createEvidence)
router.get('/', verifyToken,getEvidences)
router.get('/:id', verifyToken,getEvidenceById)
router.put('/:id', verifyToken,updateEvidence)

modules.exports = router