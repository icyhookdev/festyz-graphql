'use strict';

var mongoose = require('mongoose');

var paginate = require('mongoose-paginate-v2');

var roleSchema = mongoose.Schema({
  claim: String,
  match_type: String,
  role: String,
  value: String,
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
roleSchema.plugin(paginate);
var Role = module.exports = mongoose.model('role', roleSchema);