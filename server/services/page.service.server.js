module.exports = function (app) {

  app.post("/api/website/:websiteId/page", createPage);
  app.put("/api/page/:pageId", updatePage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.delete("/api/page/:pageId", deletePage);

  var pages = [
    { _id: '321', name: 'Post 1', websiteId: '456', description: 'Lorem' },
    { _id: '432', name: 'Post 2', websiteId: '456', description: 'Lorem' },
    { _id: '543', name: 'Post 3', websiteId: '456', description: 'Lorem' },
    { _id: '23423', name: 'Page 1', websiteId: '890', description: 'Lorem' },
    { _id: '12132', name: 'Page 2', websiteId: '890', description: 'Lorem' },
    { _id: '11111', name: 'Page 3', websiteId: '890', description: 'Lorem' }
  ];


  function createPage(req, res) {
    var page = req.body;
    page.websiteId = req.params['websiteId'];
    page._id = '' + Math.ceil((Math.random() * 1000));
    pages.push(page);
    res.json(page);
  }

  function findAllPagesForWebsite(req,res) {
    var websiteId = req.params['websiteId'];
    var tempPageList = [];
    for (let x = 0; x < pages.length; x++) {
      if (pages[x].websiteId === websiteId) {  tempPageList.push(pages[x]); }
    }
    res.json(tempPageList);
  }

  function findPageById(req,res) {
    var pageId = req.params['pageId'];
    var page;
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {  page = pages[x]; }
    }
    if (page){
      res.json(page);
    } else {
      res.json(null);
    }
  }

  function updatePage(req,res) {
    var page = req.body;
    var pageId = req.params['pageId'];
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {
        pages[x] = page;
      }
    }
    res.json(page);
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    for (let x = 0; x < pages.length; x++) {
      if (pages[x]._id === pageId) {  pages.splice(x, 1); }
    }
    res.json(null);
  }


}
