module.exports = function (app) {

  app.post("/api/user/:userId/website", createWebsite);
  app.put("/api/website/:websiteId", updateWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.delete("/api/website/:websiteId", deleteWebsite);

  var WebsiteModel = require("../../model/website/website.model.server");


  function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params['userId'];
    WebsiteModel.createWebsiteForUser(userId, website).then(function (website) {
      res.json(website);
    });
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    WebsiteModel.findAllWebsitesForUser(userId).then(function (websiteList) {
      console.log('found the following websites:');
      console.log(websiteList);
      res.json(websiteList);
    });
  }

  function findWebsiteById(req,res) {
    var websiteId = req.params['websiteId'];
    WebsiteModel.findWebsiteById(websiteId).then(function (website) {
      res.json(website);
    });
  }

  function updateWebsite(req, res) {
    var website = req.body;
    var websiteId = req.params['websiteId'];
    WebsiteModel.updateWebsite(websiteId, website).then(function (website) {
      res.json(website);
    });

  }

  function deleteWebsite(req,res) {
    var websiteId = req.params['websiteId'];
    WebsiteModel.deleteWebsite(websiteId).then(function (any) {
      res.json(any);
    })
  }

}
