module.exports = function (app) {

  var WidgetModel = require("../../model/widget/widget.model.server");

  var multer = require('multer');
  var upload = multer({ dest:__dirname + '/../../dist/assets/uploads'});

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.post("/api/page/:pageId/widget", createWidget);
  app.put("/api/widget/:widgetId", updateWidget);
  app.get("/api/page/:pageId/widget", findWidgetsByPageId);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.delete("/api/widget/:widgetId", deleteWidget);
  app.put("/api/page/:pageId/widget", sortWidgets);

  function sortWidgets(req,res) {
    var pageId = req.params['pageId'];
    var start = req.query['initial'];
    var stop = req.query['final'];
    // console.log(pageId + ' ' + start + ' ' + stop);

    WidgetModel.reorderWidget(pageId, start, stop).then(function(widgets) {
      res.json(widgets);
    });

  }


  function createWidget(req, res) {
    var widget = req.body;
    var pageId = req.params['pageId'];
    WidgetModel.createWidgetForPage(pageId, widget).then(function (widget){
      res.json(widget);
    });
  }

  function findWidgetsByPageId(req, res) {
    var pageId = req.params['pageId'];
    WidgetModel.findAllWidgetsForPage(pageId).then(function (list){
      res.json(list);
    });
  }

  function findWidgetById(req,res) {
    var widgetId = req.params['widgetId'];
    WidgetModel.findWidgetById(widgetId).then(function (widget){
      res.json(widget);
    });
  }

  function updateWidget(req, res) {
    var widget = req.body;
    var widgetId = req.params['widgetId'];
    WidgetModel.updateWidget(widgetId,widget).then(function (widget){
      res.json(widget);
    });
  }

  function deleteWidget(req,res) {
    var widgetId = req.params['widgetId'];
    WidgetModel.deleteWidget(widgetId).then(function (any){
      res.json(null);
    });
  }
  function uploadImage(req, res) {

    // console.log('image uploading');
    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;
    // console.log(path);


    WidgetModel.findWidgetById(widgetId).then(function(widget) {
      widget.url = '/assets/uploads/' + filename;
      WidgetModel.updateWidget(widgetId, widget). then(function(any){
        // /user/ userId /website/ websiteID /page/ pageId /widget
        var callbackUrl = '/website/'+websiteId+ '/page/' + pageId + '/widget';
        res.redirect(callbackUrl);
      });
    });

  }


};
