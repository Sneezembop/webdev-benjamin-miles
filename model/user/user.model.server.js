var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);
UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
module.exports = UserModel;

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function createUser(user) {
  UserModel.create(user, function (err, doc) {
    console.log(err);
    console.log(doc);
  });
}

function findUserById(userId) {
  return UserModel.findById(userId);
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function updateUser(userId, user) {
  UserModel.update(userId, user, function (err, doc) {
    console.log(err);
    console.log(doc);
  });
}

function deleteUser(userId) {
  UserModel.remove(userId, function (err, doc) {
    console.log(err);
    console.log(doc);
  })
}
