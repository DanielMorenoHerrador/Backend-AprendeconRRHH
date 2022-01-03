const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos endpoints definidas en views
// const PeliculasRouter = require('./views/PeliculaRouter');
// const PedidosRouter = require('./views/PedidoRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/users', UserRouter); //Login and register routes
// router.use('/peliculas', PeliculasRouter); //add auth
// router.use('/pedidos', PedidosRouter);

module.exports = router;