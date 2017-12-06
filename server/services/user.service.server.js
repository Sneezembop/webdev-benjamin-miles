module.exports = function (app) {

  var UserModel = require("../../model/user/user.model.server");
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;

  app.post  ('/api/login', passport.authenticate('local'), login);
  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUsers);
  app.delete("/api/user/:userId", deleteUser);
  app.post('/api/register', register);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn);

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register(req, res) {
    var user = req.body;
    UserModel
      .createUser(user)
      .then(function(user){
        req.login(user, function(err) {
          res.json(user);
        });
      });
  }


  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

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

  passport.serializeUser(serializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }


  passport.deserializeUser(deserializeUser);

  function deserializeUser(user, done) {
    UserModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
    UserModel
      .findUserByCredentials(username, password)
      .then(
        function(user) {
          if(user.username === username && user.password === password) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }


};
