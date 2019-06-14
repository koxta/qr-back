"use strict";
const Carts = require("../model/cartModel");
const User = require("../model/userModel");



exports.insert = (req, res) => {

  let cart = new Carts(req.body);  

   User.getIdByName(cart.userId,
    (result)=>{
        Carts.AddEntry({"userId":result[0].UserId,"productId":cart.productId},(result) => {
            console.log("result "+ result);
            res.send(result);
          });
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