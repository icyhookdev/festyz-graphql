"use strict";

var mongoose = require('mongoose');

var paginate = require('mongoose-paginate-v2');

var citySchema = mongoose.Schema({
  id: String,
  name: String,
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
    require: true
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    require: true
  }
});
citySchema.plugin(paginate);
var City = module.exports = mongoose.model('City', citySchema);