const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/config');
const db = new Sequelize(config.database, config.username, config.password, config);
db.User = require('../models/user')(db, DataTypes);
db.Address = require('../models/address')(db, DataTypes);

//Asociar los modelos
db.User.associate(db);
db.Address.associate(db);
module.exports =db;