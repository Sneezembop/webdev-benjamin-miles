var mongoose = require('mongoose');
var UserSchema = mongoose.Schema ( {

  username: String,
  password: String,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  websites: [{type:mongoose.Schema.Types.ObjectId, ref: 'WebsiteSchema'}],
  dateCreated: Date
}, {collection: 'user'});


module.exports = UserSchema;
