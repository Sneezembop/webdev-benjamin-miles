module.exports = function (app) {

  var UserModel = require("../../model/user/user.model.server");

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUsers);
  app.delete("/api/user/:userId", deleteUser);

  function findUserById(req, res) {
    //console.log("find user by id request made it to server");
    var userId = req.params['userId'];
    UserModel.findUserById(userId).then(function (user) {
      res.json(user);
    });
  }


  function createUser(req, res) {
    UserModel.createUser(req.body).then(function (user) {
      // console.log("got something!");
      // console.log(user.toString());
      res.json(user);
    });
  }

  function findUserByUsername(username) {
    return UserModel.findUserByUsername(username);
  }

  function findUserByUsernameAndPassword(username,password) {
    return UserModel.findUserByCredentials(username, password);
  }

  function findUsers(req,res){

    var username = req.query['username'];
    var password = req.query['password'];
   // console.log(username + ' ' + password);

    if ((username) && (password)){
      // console.log('finding user by username and password');
      findUserByUsernameAndPassword(username, password).then(function (user) {
        res.json(user);
      });

    } else if (username) {
      findUserByUsername(username).then(function (user) {
        res.json(user);
      });

    } else {
      res.json(null)
    }
  }

  function updateUser(req, res) {
    //console.log('server update user request');
    UserModel.updateUser(req.params['userId'], req.body).then(function(user){
      res.json(user);
    })
  }

  function deleteUser(req, res) {
    UserModel.deleteUser(req.params['userId']).then(function(any){
      res.json(any);
    })
  }


};
