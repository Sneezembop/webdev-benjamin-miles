module.exports = function (app) {

  var WidgetModel = require("../../model/widget/widget.model.server");

  app.post("/api/page/:pageId/widget", createWidget);
  app.put("/api/widget/:widgetId", updateWidget);
  app.get("/api/page/:pageId/widget", findWidgetsByPageId);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.delete("/api/widget/:widgetId", deleteWidget);



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


};
