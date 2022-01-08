//Importo modelo de datos
const db = require("../models");
const services = db.service;
const Op = db.Sequelize.Op;  

var orderModel  = require('../models').order;  

const ServiceController = {}; 



//CRUD endpoints services
//-------------------------------------------------------------------------------------
//GET all services de database
ServiceController.getAll = (req, res) => {
    
    services.findAll({include: [{ model:orderModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving services."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET services por Id de database
ServiceController.getById = (req, res) => {
    const id = req.params.id;

    services.findByPk(id, {include: [{ model:orderModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving services with id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE una nueva Service database
ServiceController.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Crear la Service
    const newService = {
      name: req.body.name,
      categoryId: req.body.categoryId
    };
  
    // Guardar Service en database
    services.create(newService)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      });
  };


//-------------------------------------------------------------------------------------
//Actualizar las services de la database
ServiceController.update = (req, res) => {
    const id = req.params.id;
  
    services.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET Service por titulo en database 
ServiceController.getByName = (req, res) => {
    services.findAll({ where: { name: req.params.name } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE la Service de database
ServiceController.delete = (req, res) => {
    const id = req.params.id;
  
    services.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE todas las services de database
//delete all services 
ServiceController.deleteAll = (req, res) => {
    services.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} services were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all services."
        });
      });
  };

module.exports = ServiceController;