module.exports = function (app) {

  var PageModel = require("../../model/page/page.model.server");

  app.post("/api/website/:websiteId/page", createPage);
  app.put("/api/page/:pageId", updatePage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.delete("/api/page/:pageId", deletePage);



  function createPage(req, res) {
    var page = req.body;
    var websiteId = req.params['websiteId'];
    PageModel.createPageForWebsite(websiteId, page).then(function (page){
      res.json(page);
    });
  }

  function findAllPagesForWebsite(req,res) {
    var websiteId = req.params['websiteId'];
    PageModel.findAllPagesForWebsite(websiteId).then(function (list) {
      res.json(list);
    });

  }

  function findPageById(req,res) {
    var pageId = req.params['pageId'];
    PageModel.findPageById(pageId).then(function (page) {
      res.json(page);
    })
  }

  function updatePage(req,res) {
    var page = req.body;
    var pageId = req.params['pageId'];
    PageModel.updatePage(pageId, page).then(function (page) {
      res.json(page);
    })
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    PageModel.deletePage(pageId).then(function (any) {
      res.json(null);
    })
  }


}
