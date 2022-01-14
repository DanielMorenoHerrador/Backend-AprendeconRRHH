const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const AuthController = {};

//GET todos los pedidos de database
AuthController.getAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

    user.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving categories."
        });
    });
};

//-------------------------------------------------------------------------------------
//GET users by City from database 
//FindByCity
AuthController.getByCity = (req, res) => {
    users.findAll({ where: { city: req.params.city } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};

//-------------------------------------------------------------------------------------
//DELETE a user in database
//deleteUser
AuthController.deleteUser = (req, res) => {
    const id = req.params.id;

    users.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};

//-------------------------------------------------------------------------------------
//DELETE ALL Non Admin users in database
//deleteAll
AuthController.deleteAll = (req, res) => {
    users.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        });
};

//-------------------------------------------------------------------------------------
//Login user with database
//get user
AuthController.signIn = (req, res) =>{
        let { email, password } = req.body;
        console.log(req.body);
        // Buscar usuario
        user.findOne({ where: { email: email }
        }).then(user => {
            if (!user) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {
                if (bcrypt.compareSync(password, user.password)) {
                    // Creamos el token
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        user: user,
                        token: token
                    })
                } else {
                    // Acceso denegado
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };


//-------------------------------------------------------------------------------------
//REGISTER nuevo usuario en database
AuthController.signUp = (req, res)=> {

        // Encriptamos la contraseña
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        // Crear un usuario
        user.create({
            name: req.body.name,
            dni: req.body.dni,
            email: req.body.email,
            adress: req.body.adress,
            city: req.body.city,
            cp: req.body.cp,
            password: password,
            repeat_password: password,
            phone: req.body.phone,
        }).then(user => {

            // Creamos el token
            // let token = jwt.sign({ user: user }, authConfig.secret, {
            //     expiresIn: authConfig.expires
            // });

            res.json({
                user: user,
                // token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });

    };

    //UPDATE an User from database
UserController.update = (req, res) => {
    const id = req.body.id;
    if (req.user.admin || req.user.user.id == id) {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(
        req.body.password,
        Number.parseInt(authConfig.rounds)
        );
    }
    users
        .update(req.body, {
        where: { id: id },
        })
        .then((num) => {
        if (num == 1) {
            res.send({
            message: "User was updated successfully.",
            });
        } else {
            res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
            });
        }
        })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "Error updating User with id=" + id,
        });
        });
    } else {
    res.send({
        message: "Authorization required to update user.",
    });
    }
};

module.exports = AuthController;

