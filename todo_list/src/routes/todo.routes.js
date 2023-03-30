const express = require("express");
const todoRouter = express.Router();



const { get, create } = require("../controllers/todo.controller");

// const todoController = require('../controllers/todo.controller.js');
// ==================first method =========================
// naming convansion 
//  === todoRouter.get('/' ,(req,res) => {});
// get a unique todo using id 
todoRouter.get('/todo_id' , (req, res)=>{});
// using  a new entry of a data base  
// todoRouter.post('/', (req,res)=>{});
// updating en entry
todoRouter.put('/', (req,res)=>{});
// delete entry 
todoRouter.delete('/', (req,res) =>{});

// delete all todos 
todoRouter.delete('/delete/:user_id',(req,res)=>{});

//   =============== second method ======================

todoRouter.get('/', get);
todoRouter.post('/', create);

module.exports = todoRouter;