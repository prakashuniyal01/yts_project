const { Todo } = require("../schemas/todo.schema");

const get = (req, res) => {
    // find all entery from the todo table and return it to the user 
    Todo.find({}).then(result => {
        // it will get execute only when the dB query is succesfolly 
       return res.status(200).json({ data: result })
    }).catch(err => {
        // 500 is a server error this will that exicuted if anthing goes error 
       return res.status(500).json({ data: err })
    })
};

// push request on server or validate 

const create = (req, res) => {
    // validate the data being recieved from clint 
    const _todoBody = req.body;
    const errors = new Array()
    if (!_todoBody.title || typeof _todoBody.title != 'string') {
        errors.push("title is either not present or is not type string")
    }
    if (errors.length > 0) {
        return res.status(400).json({
            data: errors,
            message: "Todo not create , validation error."
        })
    }
    const _todo = new Todo(_todoBody)
    return _todo.save().then(result => {
        // it will get execute only when the dB query is succesfolly 
        res.status(200).json({ data: result })
    }).catch(err => {
        // 500 is a server error this will that exicuted if anthing goes error 
        res.status(400).json({ data: err })
    })
}

module.exports = {get, create};