"user strict";
const sql = require("./db.js");

let Cart = function(cart) {
  this.cartId = cart.cartId;
  this.productId = cart.productId;
  this.userId = cart.userId;
};


Cart.AddEntry = function addEntry(cart,result) {
    sql.query(`INSERT INTO \`cart\` (\`UserId\`, \`ProductId\`, \`CartId\`) VALUES ('${cart.userId}', '${cart.productId}', NULL);`, function(err, res) {
      if (err) {
        console.log("error: ", err);
      } else {
        result("success");
      }
    });
  };

Cart.GetProducts = function getProducts(userId,result){
    sql.query(`SELECT * FROM \`cart\` JOIN
    products ON products.ProductId = cart.ProductId JOIN
    user ON user.UserId = cart.UserId
    WHERE UserId = '${userId}' `,
    (err,res)=>{
        result(res);
    });
}


module.exports = Cart;
