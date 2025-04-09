const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById, login, updateUser, deleteUserById} = require('../controller/userController');


// Rotas de usuários
router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/login', login);
router.put('/:id', updateUser);
router.delete('/:id', deleteUserById);

module.exports = router;