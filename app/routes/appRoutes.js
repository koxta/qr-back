'use strict';
module.exports = function(app) {
  var controller = require('../controller/appController');

  // todoList Routes
  app.route('/products')
    .get(controller.list_all_products)
    .post(controller.add_product)

  app.route('/products/:id')
    .get(controller.get_product_by_id)

    };
