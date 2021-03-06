var UserModel = require('../user/user.model.server');
var WebsiteSchema = require('./website.schema.server');
var mongoose = require('mongoose');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(userId, website) {
  website._user = userId;
  return WebsiteModel.create(website).then(function (website) {
    return UserModel.findUserById(userId).then(function (user) {
      user.websites.push(website);
      return user.save();
    });
  });
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({developerId: userId}).populate('developerId').exec(function (err) {
    if (err) console.log(err);
  });

}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.findWebsiteById(websiteId).then(function (website) {
    var userId = website.developerId;
    WebsiteModel.deleteOne({_id: websiteId}).then(function () {
      UserModel.findUserById(userId).then(function (user) {
        var i = user.websites.indexOf(website);
        user.websites.splice(i, 1);
        return user.save();
      });
    });
  });


}
