'use strict';
module.exports = function(app) {
  const controller = require('../controller/appController');
  const cartController = require('../controller/cartController');
  const userController = require('../controller/userController');

  app.route('/products')
    .get(controller.list_all_products)
    .post(controller.add_product)

  app.route('/products/:id')
    .get(controller.get_product_by_id)

  app.route('/cart/:id')
    .get(cartController.get_device_products)
    .post(cartController.insert);

  app.route('/cart/:id/buy')
  .get(cartController.buy);  

  app.route('/user/:id')
  .get(userController.add_device);

    };
