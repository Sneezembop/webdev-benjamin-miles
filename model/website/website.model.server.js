var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);
var UserModel = require('../user/user.model.server');
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(userId, website) {
  website._user = userId;
  return WebsiteModel.create(website).then(function (website) {
    UserModel.findUserById(userId).then(function (user) {
      user.websites.push(website);
      return user.save();
    });
  });
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({_user: userId}).populate('_user').exec();

}
function findWebsiteById(websiteId) {
    return WebsiteModel.findById(websiteId);
}
function updateWebsite(websiteId, website) {
  WebsiteModel.update(websiteId, website, function (err, doc) {
    console.log(err);
    console.log(doc);
  });
}
function deleteWebsite(websiteId) {
  /*WebsiteModel.remove(websiteId).then(function (website) {
    UserModel.findUserById(userId).then(function (user) {
      user.websites.(website);
      return user.save();
    });
 */
}
