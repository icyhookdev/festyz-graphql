"use strict";

var mongoose = require('mongoose');

var paginate = require('mongoose-paginate-v2');

var stateSchema = mongoose.Schema({
  id: String,
  name: String,
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    require: true
  }
});
stateSchema.plugin(paginate);
var State = module.exports = mongoose.model('State', stateSchema);