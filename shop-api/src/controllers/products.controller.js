var products = require('../../store');
const { http_formatter } = require("../util/formatter");
const { Product } = require('../schemas/product.schema')

//either you use async-await or you use then-catch

// method 1
// const getAll = async (req, res) => {
    
//     // const cursor = Product.find().cursor();

//     // // order -> preparing food.
//     // // eat -> consumed
//     // // pay for the stuff.
//     // var data = [];
//     // for(let doc = await cursor.next(); doc!=null ; doc = await cursor.next()){
//     //     data= [...data, doc];
//     // }
//     return res.send(http_formatter("All the products are being displayed", data));
// }

//method 2
const getAll = (req, res) => { 
    Product.find({}).select('name price').then((result)=> {
        res.send(http_formatter("All products are being displayed", result))
    }).catch((err) => res.send(http_formatter("Error while finding products", err)));
}

const getSingleProduct = (req, res) => {
    const id = req.params.id;
    Product.find({_id:id}).then((result)=>{
        res.send(http_formatter("Product Found", result))
    }).catch((err) => {res.send(http_formatter("error while finding product", err))});

    // const id = req.params.id;
    // var idx = products.findIndex(i => i.productId === parseInt(id));
    // if(idx!==-1){
    //     return res.send(http_formatter("Product Found", products[idx]))
    // }
    // else{
    //     return res.send(http_formatter("No Product Found!"))
    // }
}

const createProduct = (req, res) => {
    // if(products.findIndex(i => i.productId===req.body.productId)===-1){        
    //     products=[...products, req.body];
    //     return res.send(http_formatter("Successfully created new product!!"))
    // }
    // return res.send(http_formatter("error while generating new product"))
    const _product = new Product(req.body);
    _product.save().then(doc => {
        return res.send(http_formatter("Successfully created new product!!", doc))
    }).catch(err => {
        return res.send(http_formatter("Failed to create a product", err, false))
    })
}

const deleteProduct = (req, res) => {
    var id = req.query.id;
    Product.deleteOne({_id:id}).then((result) => {
        res.send(http_formatter("successfully deleted", result))
    }).catch((err)=> res.send(http_formatter("error while deleting product", err)));
    // var idx = products.findIndex(i => i.productId === parseInt(id))
    // if( idx !== -1){
    //     var item = products[idx];
    //     products.splice(idx, 1);
    //     return res.send(http_formatter("Successfully deleted the product", item))
    // }
    // return res.send(http_formatter("No such product found"))
}

module.exports = {getAll, getSingleProduct, createProduct, deleteProduct}