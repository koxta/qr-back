'use strict';

var Products = require('../model/appModel.js');

exports.list_all_products = function(req, res) {
  Products.getAllProduct(function(err, Products) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Products);
    res.send(Products);
  });
};

