const express = require('express');
const router = express.Router();

//Importar modelo de datos
const AuthController = require('../controllers/AuthController');


// Dos rutas: login y registro
router.get('/', AuthController.getAll);
router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);
router.put('/update', AuthController.update);


module.exports = router;