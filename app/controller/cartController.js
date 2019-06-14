"use strict";
const Carts = require("../model/cartModel");

exports.insert = (req, res) => {

  let cart = new Carts(req.body);  

  Carts.AddEntry(cart,(result) => {
    console.log("result "+ result);
    res.send(result);
  });
};

exports.get_device_products = (req,res) =>{
    const deviceId = req.params.id;
    console.log("device id = " + deviceId);
    Carts.GetProducts(deviceId,
        (result)=>{
            console.log(result);
            res.send(result);
        })
}