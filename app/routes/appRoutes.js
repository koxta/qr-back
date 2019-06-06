'use strict';
module.exports = function(app) {
  var controller = require('../controller/appController');

  // todoList Routes
  app.route('/products')
    .get(controller.list_all_products)
   
//    app.route('/products/:productId')

    };