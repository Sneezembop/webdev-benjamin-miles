var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

function createWebsiteForUser(userId, website) {

}

function findAllWebsitesForUser(userId) {
  return UserModel.findAll({_user: userId});

}
function findWebsiteById(websiteId) {
    return WebsiteModel.findById(websiteId);
}
function updateWebsite(websiteId, website) {

}
function deleteWebsite(websiteId) {

}
