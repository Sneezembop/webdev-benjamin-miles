var connectionString = 'mongodb://localhost/cs5610'; // for local


if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds115738.mlab.com:15738/heroku_slb89g5b'; // use yours
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, {useMongoClient: true});

module.exports = db;
