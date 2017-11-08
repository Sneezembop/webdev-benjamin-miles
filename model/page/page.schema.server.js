var mongoose = require('mongoose');
var pageSchema = mongoose.Schema ( {

  websiteId: {type:mongoose.Schema.Types.ObjectId, ref: 'websiteSchema'},
  name: String,
  title: String,
  description: String,
  widgets: [{type:mongoose.Schema.Types.ObjectId, ref: 'widgetSchema'}],
  dateCreated: Date
}, {collection: 'page'});


module.exports = pageSchema;
