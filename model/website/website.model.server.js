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
    return UserModel.findUserById(userId).then(function (user) {
      user.websites.push(website);
      return user.save();
    });
  });
}

function findAllWebsitesForUser(userId) {
  console.log('finding websites for user');
  console.log(userId);
  return WebsiteModel.find({developerId: userId}).populate('developerId').exec();

}
function findWebsiteById(websiteId) {
    return WebsiteModel.findById(websiteId);
}
function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}
function deleteWebsite(websiteId) {
  return WebsiteModel.findWebsiteById(websiteId).then(function(website) {
    return UserModel.findUserById(website.developerId).then(function(user) {
      var i = user.websites.indexOf(website);
      user.websites.splice(i,1);
      return WebsiteModel.delete({_id: websiteId}).then(function(any) {
        return user.save();
      });
    });
  });


  return WebsiteModel.remove({_id: websiteId});
}
