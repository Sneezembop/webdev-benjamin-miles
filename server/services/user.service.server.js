module.exports = function (app) {

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUsers);
  app.delete("/api/user/:userId", deleteUser);

  var users = [
    {_id: '456', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '123', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

  function findUserById(req, res) {
    //console.log("find user by id request made it to server");
    var userId = req.params['userId'];
    var user;

      for (let x = 0; x < users.length; x++) {
        if (users[x]._id === userId) {
          user = users[x];
        }
      }

    if (user) {
      res.json(user);
    } else {
      res.json({});
    }
  }


  function createUser(req, res) {
    var userId = '' + Math.ceil((Math.random() * 1000));
    var user = req.params['user'];
    user._id = userId;
    users.push(user);
    res.json(user);
  }

  function findUserByUsername(req, res) {
    console.log(req.params['username']);
    var username = req.params['username'];
     var user;
    for (let x = 0; x < users.length; x++) {
      if (users[x].username === username) {
        user = users[x];
      }
    }
    if (user) {
      res.json(user);
    } else {
      res.json({});
    }

  }

  function findUsers(req,res){
    var username = req.params['username'];
    var password = req.params['password'];

    if 

  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = req.params['user'];
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users[x]._id = user._id;
        users[x].firstName = user.firstName;
        users[x].lastName = user.lastName;
        users[x].password = user.password;
        users[x].username = user.username;
      }
    }
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users.splice(x, 1);
      }
    }
  }


};
