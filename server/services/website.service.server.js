module.exports = function (app) {

  app.post("/api/user/:userId/website", createWebsite);
  app.put("/api/website/:websiteId", updateWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.delete("/api/website/:websiteId", deleteWebsite);

  var websites = [
    {_id: '123', name: 'Facebook', developerId: '456', description: 'Lorem'},
    {_id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem'},
    {_id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem'},
    {_id: '890', name: 'Go', developerId: '123', description: 'Lorem'},
    {_id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem'},
    {_id: '678', name: 'Checkers', developerId: '123', description: 'Lorem'},
    {_id: '789', name: 'Chess', developerId: '234', description: 'Lorem'}
  ];


  function createWebsite(req, res) {
    console.log('creating new website');
    var website = req.body;
    website.developerId = req.params['userId'];
    website._id = '' + Math.ceil((Math.random() * 1000));
    websites.push(website);
    res.json(website);
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    var tempWebsiteList = [];
    for (let x = 0; x < websites.length; x++) {
      if (websites[x].developerId === userId) {  tempWebsiteList.push(websites[x]); }
    }
    res.json(tempWebsiteList);
  }

  function findWebsiteById(req,res) {
    var websiteId = req.params['websiteId'];
    var website;
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {  website = websites[x]; }
    }
    if (website){
      res.json(website);
    } else {
      res.json(null);
    }
  }

  function updateWebsite(req, res) {
    var website = req.body;
    var websiteId = req.params['websiteId'];
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites[x] = website; }
    }
    res.json(website);
  }

  function deleteWebsite(req,res) {
    var websiteId = req.params['websiteId'];
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {  websites.splice(x, 1); }
    }
    res.json({});
  }

}
