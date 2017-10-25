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
    console.log('creating new user');
    var userId = '' + Math.ceil((Math.random() * 1000));
    var user = req.body;
    user._id = userId;
    users.push(user);
    res.json(user);
  }

  function findUserByUsername(username) {

    for (let x = 0; x < users.length; x++) {
      if (users[x].username === username) {
        return users[x];
      }
    }

    return null;
  }

  function findUserByUsernameAndPassword(username,password) {

    for (let x = 0; x < users.length; x++) {
      if ((users[x].username === username) && (users[x].password === password)) {
       // console.log('user found');
        return users[x];
      }
    }
   // console.log('user not found :(');
    return null;
  }

  function findUsers(req,res){

    var username = req.query['username'];
    var password = req.query['password'];
   // console.log(username + ' ' + password);

    if ((username) && (password)){
      // console.log('finding user by username and password');
      res.json(findUserByUsernameAndPassword(username, password));
    } else if (username) {
      res.json(findUserByUsername(username));
    } else {
      res.json(null)
    }
  }

  function updateUser(req, res) {
    console.log('updating user');
    var user = req.body;
    var userId = user._id;
    for (let x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users[x].firstName = user.firstName;
        users[x].lastName = user.lastName;
        users[x].password = user.password;
        users[x].email = user.email;
        users[x].username = user.username;
      }
    }
    res.json({});
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
