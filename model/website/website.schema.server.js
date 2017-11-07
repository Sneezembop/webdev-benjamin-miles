var mongoose = require('mongoose');
var websiteSchema = mongoose.Schema ( {

  _user: {type:mongoose.Schema.Types.ObjectId, ref: 'userSchema'},
  name: String,
  description: String,
  websites: [{type:mongoose.Schema.Types.ObjectId, ref: 'pageSchema'}],
  dateCreated: Date
}, {collection: 'cs5610'});


module.exports = websiteSchema;
