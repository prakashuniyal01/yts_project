const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TodoSchema = new Schema({
    title:{
        type:String,
        require:true,
        trim:true,
        minlength:5,
        maxlength:100
    },
    description:{
        type:String,
        require:false,
        default:""
    },
    auther:{
        type:String,
        require:true,
        maxlength:25,
        trim:true,
        lowercase:true
    },
    deadline:{
        type:Date,
        require:false
    },
    // 
   },{
       timestam:true,
       versionKey:false
       /**
        * timestam  true 
        * it enabled two features,
        * created_at 
        * tine updated 
        *  */    
});
// now we have to make to be able to use it in controller 
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {Todo};