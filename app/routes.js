'use strict'
const express = require ("express"),
      Routes = express.Router();
const UserController = require('./Controllers/UserController')
const AddrresController = require('./Controllers/AddrressController')

      Routes
      .get('', (req, res)=>{
        res.json({hola:'Mundo'})
      })
      .get('/users', UserController.all)
      .get('/addrres', AddrresController.all)


      module.exports = Routes;