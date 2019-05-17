'use strict';

var mongoose = require('mongoose');

var paginate = require('mongoose-paginate-v2');

var userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  status: {
    type: Boolean,
    "default": true
  },
  created_at: {
    type: Date,
    "default": Date.now
  },
  updated_at: {
    type: Date,
    "default": Date.now
  }
});
userSchema.plugin(paginate);
var User = module.exports = mongoose.model('user', userSchema);