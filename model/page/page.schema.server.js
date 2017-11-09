var mongoose = require('mongoose');
var PageSchema = mongoose.Schema ( {

  websiteId: {type:mongoose.Schema.Types.ObjectId, ref: 'WebsiteSchema'},
  name: String,
  title: String,
  description: String,
  widgets: [{type:mongoose.Schema.Types.ObjectId, ref: 'WidgetSchema'}],
  dateCreated: Date
}, {collection: 'page'});


module.exports = PageSchema;
