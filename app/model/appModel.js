'user strict';
var sql = require('./db.js');

var Product = function(product){
    this.productId = product.productId;
    this.productName = product.productName;
    this.productPrice = product.productPrice;
};

Product.getAllProduct = function getAllProduct(result) {
        sql.query("Select * from Products", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  

                 result(null, res);
                }
            });   
};
module.exports = Product;