var mongoose = require('mongoose');
var WebsiteSchema = mongoose.Schema ( {

  developerId: {type:mongoose.Schema.Types.ObjectId, ref: 'UserSchema'},
  name: String,
  description: String,
  pages: [{type:mongoose.Schema.Types.ObjectId, ref: 'PageSchema'}],
  dateCreated: Date
}, {collection: 'website'});


module.exports = WebsiteSchema;
