'use strict';
const {Model} = require('sequelize');
const category = require('./order');
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    
    static associate(models) {
      
      this.hasMany(models.order, {
        foreignKey: 'serviceId'
      });
    }
  };
  service.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'service',
  });
  return service;
};