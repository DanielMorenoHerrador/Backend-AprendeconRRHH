'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    
    static associate(models) {
      
      this.belongsTo(models.service, {
        foreignKey: 'serviceId'
      });
      this.belongsTo(models.user, {
        foreignKey: 'userId'
      });
    }
  };
  order.init({
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'order',
  });
  return order;
};