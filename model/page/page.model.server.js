var WebsiteModel = require('../website/website.model.server');
var PageSchema = require('./page.schema.server');
var mongoose = require('mongoose');
var PageModel = mongoose.model('PageModel', PageSchema);
PageModel.createPageForWebsite = createPageForWebsite;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function createPageForWebsite(websiteId, page) {
  page._website = websiteId;
  return PageModel.create(page).then(function (page) {
    return WebsiteModel.findWebsiteById(websiteId).then(function (website) {
      website.pages.push(page);
      return website.save();
    });
  });
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({websiteId: websiteId}).populate('websiteId').exec(function (err) {
    if (err) console.log(err);
  });

}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  return PageModel.findPageById(pageId).then(function (page) {
    var websiteId = page.developerId;
    PageModel.deleteOne({_id: pageId}).then(function () {
      WebsiteModel.findWebsiteById(websiteId).then(function (website) {
        var i = website.pages.indexOf(page);
        website.pages.splice(i, 1);
        return website.save();
      });
    });
  });


}
