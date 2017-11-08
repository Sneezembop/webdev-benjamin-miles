var mongoose = require('mongoose');
var websiteSchema = mongoose.Schema ( {

  developerId: {type:mongoose.Schema.Types.ObjectId, ref: 'userSchema'},
  name: String,
  description: String,
  websites: [{type:mongoose.Schema.Types.ObjectId, ref: 'pageSchema'}],
  dateCreated: Date
}, {collection: 'website'});


module.exports = websiteSchema;
