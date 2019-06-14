"user strict";
const sql = require("./db.js");

let Cart = function(cart) {
  this.cartId = cart.cartId;
  this.productId = cart.productId;
  this.userId = cart.userId;
};


Cart.AddEntry = function addEntry(deviceId,productId) {
    sql.query(`INSERT INTO \`cart\` (\`UserId\`, \`ProductId\`, \`CartId\`) VALUES ('${deviceId}', '${productId}', NULL);`, function(err, res) {
      if (err) {
        console.log("error: ", err);
      } else {
        
      }
    });
  };
