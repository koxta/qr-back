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

Product.addProduct = function addProduct(product)
{
    sql.query(`INSERT INTO \`products\` (\`ProductId\`, \`ProductName\`, \`ProductPrice\`) VALUES (NULL, \'${product.productName}\', \'${product.productPrice}\');`,
    (err,res)=>{
        if(err) {
            console.log("error: ", err);
        }
        else{
          console.log("added successfully");  
        }
    });
}

module.exports = Product;