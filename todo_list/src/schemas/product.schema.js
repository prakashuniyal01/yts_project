const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productSchema = new Schema({
    title:{
        type:String,
        require:true,
        trim:true,
        minlength:5,
        maxlength:100
    },
    
});
// now we have to make to be able to use it in controller 
const Product = mongoose.model("Product", productSchema);

module.exports = {Product};