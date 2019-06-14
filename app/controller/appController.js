"use strict";

var Products = require("../model/appModel.js");

exports.list_all_products = function(req, res) {
  Products.getAllProduct(function(err, Products) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", Products);
    res.send(Products);
  });
};

exports.add_product = function(req, res) {
  var newProduct = new Products(req.body);
  console.log(req.body);
  console.log("--------------------------");
  if (!newProduct.productName || !newProduct.productPrice) {
    res
      .status(400)
      .send({ error: true, message: "Please provide task/status" });
  } else {
    Products.addProduct(newProduct);
  
    res.status(200).send({ message: "successfully added" });
  }
};

exports.get_product_by_id = (req,res) => {
  const requestId = req.params.id;
  console.log("request id = " + req.params.id);
  Products.getProductById(requestId,(result)=>{
    res.send(result);
  });
};
