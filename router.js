const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos endpoints definidas en views
const ServicesRouter = require('./views/ServiceRouter');
const OrdersRouter = require('./views/OrderRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/users', UserRouter); //Login and register routes
router.use('/services', ServicesRouter); //add auth
router.use('/orders', OrdersRouter);

module.exports = router;