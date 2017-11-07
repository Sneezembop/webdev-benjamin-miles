var mongoose = require('mongoose');
var pageSchema = mongoose.Schema ( {

  _website: {type:mongoose.Schema.Types.ObjectId, ref: 'websiteSchema'},
  name: String,
  title: String,
  description: String,
  widgets: [{type:mongoose.Schema.Types.ObjectId, ref: 'widgetSchema'}],
  dateCreated: Date
}, {collection: 'cs5610'});


module.exports = pageSchema;
