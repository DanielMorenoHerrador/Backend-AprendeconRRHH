const express = require('express');
const router = express.Router();

//Importar modelo de datos
const OrderController = require('../controllers/OrderController');

// Endpoints CRUD Orders
router.get('/', OrderController.getAll);
// router.get('/:id', OrderController.getById);
router.get("/getByUserId", OrderController.getByUserId);
router.get('/title/:title', OrderController.getByType);
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.delete('/', OrderController.deleteAll);
router.delete('/:id', OrderController.delete);

module.exports = router;