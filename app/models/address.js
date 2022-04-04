'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    
    static associate(models) {
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