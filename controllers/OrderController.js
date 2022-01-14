//Importo modelo de datos
const db = require("../models");
const order = db.order;
const user = db.user;
const Op = db.Sequelize.Op; 

const OrderController = {};


//CRUD endpoints pedidos
//-------------------------------------------------------------------------------------
//GET todos los pedidos de database
OrderController.getAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    order.findAll({ where: condition })
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
//GET pedidos por ID en database
// OrderController.getById = (req, res) => {
//     const id = req.params.id;
  
//     order.findByPk(id)
//       .then(data => {
//         if (data) {
//           res.send(data);
//         } else {
//           res.status(404).send({
//             message: `Cannot find pedido with id=${id}.`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving categories with id=" + id
//         });
//       });
//   };


//-------------------------------------------------------------------------------------
//CREATE un nuevo pedido en database
OrderController.create = (req, res) => {
    
    if (!req.body.userId && !req.body.serviceId) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    
    const neworder = {
      userId: req.body.userId,
      serviceId: req.body.serviceId,
      rentDate: new Date(),
      returnDate: new Date(),
    };
  
    
    order.create(neworder)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the neworder."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE pedidos de database
OrderController.update = (req, res) => {
    const id = req.params.id;
  
    order.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "order was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update order with id=${id}. Maybe Service was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating order with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET pedidos por TYPE en database  
OrderController.getByType = (req, res) => {
    order.findAll({ where: { type: req.params.type } })
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
//DELETE pedidos por Id de database
OrderController.delete = (req, res) => {
    const id = req.params.id;
  
    order.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "order was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete order with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete order with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE todos los pedidos de database   
OrderController.deleteAll = (req, res) => {
    order.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} categories were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all categories."
        });
      });
  };

  OrderController.getByUserId = (req, res) => {
    const id = req.body.userId;
      order.findAll({
          where: { userId: id },
          order: [["id", "desc"]],
          include: [
            { model: user },
          ],
        })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving orders.",
          });
        });
  };

module.exports = OrderController;