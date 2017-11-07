var mongoose = require('mongoose');
var userSchema = mongoose.Schema ( {

  username: String,
  password: String,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  websites: [{type:mongoose.Schema.Types.ObjectId, ref: 'websiteSchema'}],
  dateCreated: Date
}, {collection: 'collectionNameInMongo'});


module.exports = userSchema;
