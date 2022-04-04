'use strict'
const express = require ("express"),
      Routes = express.Router();
const UserController = require('./Controllers/UserController')

      Routes
      .get('', (req, res)=>{
        res.json({hola:'Mundo'})
      })
      .get('/users', UserController.all)


      module.exports = Routes;