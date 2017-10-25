module.exports = function (app) {

  app.post("/api/page/:pageId/widget", createWidget);
  app.put("/api/widget/:widgetId", updateWidget);
  app.get("/api/page/:pageId/widget", findWidgetsByPageId);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.delete("/api/widget/:widgetId", deleteWidget);

  var widgets = [
    {_id: '123', type: 'HEADER', pageId: '321', size: 2, text: 'GIZMODO'},
    {_id: '234', type: 'HEADER', pageId: '321', size: 4, text: 'Extra Header'},
    {
      _id: '345', type: 'IMAGE', pageId: '321', width: '100%',
      url: 'https://i.pinimg.com/736x/1b/15/ff/1b15ff0748697cc44048a0d84f5a2f93--rick-and-morty-fondos-rick-and-morty-fanart.jpg'
    },
    {_id: '456', type: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'},
    {_id: '567', type: 'HEADER', pageId: '321', size: 5, text: 'Other Header'},
    {
      _id: '678', type: 'YOUTUBE', pageId: '321', width: '100%',
      url: 'https://www.youtube.com/embed/GI6CfKcMhjY'
    },
    {_id: '789', type: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>'}
  ];


  function createWidget(req, res) {
    var widget = req.body;
    widget.pageId = req.params['pageId'];
    widget._id = '' + Math.ceil((Math.random() * 1000));
    widgets.push(widget);
    // console.log(this.widgetListToString(pageId));
    res.json(widget);
  }

  function findWidgetsByPageId(req, res) {
    var pageId = req.params['pageId'];
    const tempWidgetList = [];
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x].pageId === pageId) {
        tempWidgetList.push(widgets[x]);
      }
    }
    res.json(tempWidgetList);
  }

  function findWidgetById(req,res) {
    var widget;
    var widgetId = req.params['widgetId'];
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widget =  widgets[x];
      }
    }
    if (widget){
      res.json(widget);
    } else {
      res.json(null);
    }
  }

  function updateWidget(req, res) {
    var widget = req.body;
    var widgetId = req.params['widgetId'];
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widgets.splice(x, 1, widget);
      }
    }
    res.json(widget);
  }

  function deleteWidget(req,res) {
    var widgetId = req.params['widgetId'];
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widgets.splice(x, 1);
      }
    }
    res.json(null);
  }


};
