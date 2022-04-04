'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    
    static associate(models) {
      Address.belongsTo(models.User, {as:"residente", foreignKey:"userId"})
    }
  }
  Address.init({
    street: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};