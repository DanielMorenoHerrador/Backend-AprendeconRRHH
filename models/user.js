'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    
    // static associate(models) {
    //   this.hasMany(models.pedido, {
    //     foreignKey: 'userId'
    //   })
      
    // }
  };
  user.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    repeat_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};