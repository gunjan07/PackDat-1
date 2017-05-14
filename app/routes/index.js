var  userController = require("../controllers/user");

module.exports =  function (app,passport) {
    console.log("checking")
    app.get('/api/', function(req,res){
        console.log("inside route index");
        res.status(200).send({message: 'Welcome to api'})
    })

    app.get('/api/user', userController.list);
    app.post('/api/user', userController.create);

};