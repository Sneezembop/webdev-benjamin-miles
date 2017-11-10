var PageModel = require('../page/page.model.server');
var WidgetSchema = require('./widget.schema.server');
var mongoose = require('mongoose');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);
WidgetModel.createWidgetForPage = createWidgetForPage;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;

function createWidgetForPage(pageId, widget) {
  widget._page = pageId;
  return WidgetModel.create(widget).then(function (widget) {
    return PageModel.findPageById(pageId).then(function (page) {
      page.widgets.push(widget);
      return page.save();
    });
  });
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({pageId: pageId}).populate('pageId').exec(function (err) {
    if (err) console.log(err);
  });

}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  // console.log('updating widget');
  return WidgetModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  return WidgetModel.findWidgetById(widgetId).then(function (widget) {
    var pageId = widget.developerId;
    WidgetModel.deleteOne({_id: widgetId}).then(function () {
      PageModel.findPageById(pageId).then(function (page) {
        var i = page.widgets.indexOf(widget);
        page.widgets.splice(i, 1);
        return page.save();
      });
    });
  });
}

function reorderWidget(pageId, start, end) {
  //don't worry about this yet.
}


