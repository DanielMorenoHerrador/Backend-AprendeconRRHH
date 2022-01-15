const express = require('express');
const router = express.Router();

//Importar modelo de datos
const AuthController = require('../controllers/AuthController');


// Tres rutas: login , registro y update
router.post('/', AuthController.getAll);
router.get("/getById", AuthController.getById);
router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);
router.put('/update', AuthController.update);


module.exports = router;