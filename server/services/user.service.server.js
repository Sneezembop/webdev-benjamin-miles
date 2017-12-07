

module.exports = function (app) {

  var UserModel = require('../../model/user/user.model.server');
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require('bcrypt-nodejs');



  // comment this out later

  var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };
  passport.use(
    new FacebookStrategy(facebookConfig, facebookStrategy));

  passport.use(new LocalStrategy(localStrategy));
  passport.deserializeUser(deserializeUser);
  passport.serializeUser(serializeUser);


  app.post  ('/api/login', passport.authenticate('local'), login);
  app.post('/api/user', createUser);
  app.put('/api/user/:userId', updateUser);
  app.get('/api/user/:userId', findUserById);
  app.get('/api/user', findUsers);
  app.delete('/api/user/:userId', deleteUser);
  app.post('/api/register', register);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn);
  app.get ('/api/facebook/login',
    passport.authenticate('facebook', { scope : 'email' }));
  app.get ('/api/facebook/oauth2callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    }));

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
    user.password = bcrypt.hashSync(user.password);
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
    //console.log('find user by id request made it to server');
    var userId = req.params['userId'];
    UserModel.findUserById(userId).then(function (user) {
      res.json(user);
    });
  }


  function createUser(req, res) {
    UserModel.createUser(req.body).then(function (user) {
      // console.log('got something!');
      // console.log(user.toString());
      res.json(user);
    });
  }

  function findUserByUsername(username) {
    return UserModel.findUserByUsername(username);
  }

  function findUserByUsernameAndPassword(username,password) {
    password = bcrypt.hashSync(password);
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



  function serializeUser(user, done) {
    done(null, user);
  }




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



  function facebookStrategy(token, refreshToken,
                            profile, done) {
    UserModel
      .findUserByFacebookId(profile.id)
      .then(function(user) {
         if(user) { return done(null, user); } // already in db
      // if(user) { return user; } // already in db
      else { // if not, insert into db using profile info
        var names = profile.displayName.split(' ');
        var newFacebookUser = { lastName:  names[1],
          firstName: names[0],
          email:     profile.emails ? profile.emails[0].value:'',
          facebook: { id:    profile.id, token: token }
        };
        return UserModel.createUser(newFacebookUser);
      }
    })

      .then(
      function(user){
        return done(null, user);
      }
    );
  }

};
