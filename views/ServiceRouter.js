const express = require('express');
const router = express.Router();

//Importar modelo de datos
const ServicesController = require('../controllers/ServiceController');

// Endpoints CRUD peliculas
router.get('/', ServicesController.getAll);
router.get('/:id', ServicesController.getById);
router.get('/name/:name', ServicesController.getByName);
router.post('/', ServicesController.create);
router.put('/:id', ServicesController.update);
router.delete('/', ServicesController.deleteAll);
router.delete('/:id', ServicesController.delete);

module.exports = router;